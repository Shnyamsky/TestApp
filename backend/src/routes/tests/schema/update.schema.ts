import { FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

import { Question } from "../../../shared/schema"

const UpdateTestDto = Type.Object({
  test: Type.Object({
    title: Type.String(),
    slug: Type.String(),
    questions: Type.Array(Question)
  })
})

export type UpdateTestDto = Static<typeof UpdateTestDto>

export interface UpdateTest extends RouteGenericInterface {
  Body: UpdateTestDto
}

export const UpdateTestSchema: FastifySchema = {
  body: UpdateTestDto
}
