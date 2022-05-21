import { FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

import { Question } from "../../../shared/schema"

const CreateTestDto = Type.Object({
  test: Type.Object({
    title: Type.String(),
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
