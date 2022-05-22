import { Static, Type } from "@sinclair/typebox"
import { RouteGenericInterface } from "fastify/types/route"

const DeleteTestParams = Type.Object({
  slug: Type.String()
})

export type DeleteTestParams = Static<typeof DeleteTestParams>

export interface DeleteTest extends RouteGenericInterface {
  Params: DeleteTestParams
}
