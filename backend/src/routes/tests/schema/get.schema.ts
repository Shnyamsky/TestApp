import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

const GetTestParams = Type.Object({
  slug: Type.String()
})

export type GetTestParams = Static<typeof GetTestParams>

export interface GetTest extends RouteGenericInterface {
  Params: GetTestParams
}
