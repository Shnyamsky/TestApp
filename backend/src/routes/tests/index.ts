import { FastifyPluginAsync } from "fastify"
import TestModel from "../../models/test"
import { CreateTest, CreateTestSchema } from "./schema/create.schema"
import { GetTest } from "./schema/get.schema"

const TestsRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<CreateTest>("/", { schema: CreateTestSchema }, async (request, reply) => {
    const newTest = await TestModel.create(request.body.test)

    return newTest
  })

  fastify.get<GetTest>("/:slug", async (request, reply) => {
    return await TestModel.findOne({ slug: request.params.slug })
  })

  fastify.put<CreateTest>("/", { schema: CreateTestSchema }, async (request, reply) => {
    return await TestModel.updateOne({ slug: request.body.test.slug }, request.body.test)
  })

  fastify.get("/", async (request, reply) => {
    return await TestModel.find().exec()
  })
}

export default TestsRoute
