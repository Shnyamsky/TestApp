import { FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

const Answer = Type.Object({
  text: Type.String(),
  points: Type.Number()
})

const Question = Type.Object({
  text: Type.String(),
  answers: Type.Array(Answer)
})

const CreateTestDto = Type.Object({
  test: Type.Object({
    title: Type.String(),
    slug: Type.String(),
    questions: Type.Array(Question)
  })
})

export type CreateTestDto = Static<typeof CreateTestDto>

export interface CreateTest extends RouteGenericInterface {
  Body: CreateTestDto
}

export const CreateTestSchema: FastifySchema = {
  body: CreateTestDto
}
