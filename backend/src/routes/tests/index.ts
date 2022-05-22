import { FastifyPluginAsync } from "fastify"
import ResultModel from "../../models/result"
import TestModel from "../../models/test"
import { createSlug } from "../../shared/helpers"
import { CreateTest, CreateTestSchema } from "./schema/create.schema"
import { DeleteTest } from "./schema/delete.schema"
import { GetTest } from "./schema/get.schema"
import { UpdateTest, UpdateTestSchema } from "./schema/update.schema"

const TestsRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<CreateTest>("/", { schema: CreateTestSchema }, async (request, reply) => {
    const slug = createSlug(request.body.test.title)
    const newTest = await TestModel.create({ ...request.body.test, slug })

    return newTest
  })

  fastify.put<UpdateTest>("/", { schema: UpdateTestSchema }, async (request, reply) => {
    return await TestModel.updateOne({ slug: request.body.test.slug }, request.body.test)
  })

  fastify.get<GetTest>("/:slug", async (request, reply) => {
    return await TestModel.findOne({ slug: request.params.slug })
  })

  fastify.get("/", async (request, reply) => {
    return await TestModel.find().exec()
  })

  fastify.delete<DeleteTest>("/:slug", async (request, reply) => {
    await TestModel.deleteOne({ slug: request.params.slug })
    await ResultModel.deleteMany({ testSlug: request.params.slug })

    return { success: true }
  })
}

export default TestsRoute
