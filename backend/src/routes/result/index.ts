import { FastifyPluginAsync } from "fastify"
import ResultModel from "../../models/result"
import { AddResult, AddResultSchema } from "./schema/add.schema"
import { GetResults } from "./schema/get.schema"

const TestsRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<AddResult>("/", { schema: AddResultSchema }, async (request, reply) => {
    return await ResultModel.create(request.body.result)
  })

  fastify.get<GetResults>("/", async (request, reply) => {
    return await ResultModel.find()
  })
}

export default TestsRoute
