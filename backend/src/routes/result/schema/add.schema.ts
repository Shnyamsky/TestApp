import { FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"
import { Student } from "../../../shared/schema/student.schema"

const AddResultDto = Type.Object({
  result: Type.Object({
    student: Student,
    score: Type.Number(),
    testSlug: Type.String(),
    text: Type.String()
  })
})

export type AddResultDto = Static<typeof AddResultDto>

export interface AddResult extends RouteGenericInterface {
  Body: AddResultDto
}

export const AddResultSchema: FastifySchema = {
  body: AddResultDto
}
