import { FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

const AddResultDto = Type.Object({
  result: Type.Object({
    name: Type.String(),
    score: Type.Number(),
    testName: Type.String()
  })
})

export type AddResultDto = Static<typeof AddResultDto>

export interface AddResult extends RouteGenericInterface {
  Body: AddResultDto
}

export const AddResultSchema: FastifySchema = {
  body: AddResultDto
}
