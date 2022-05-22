import { RouteGenericInterface } from "fastify/types/route"
import { Static, Type } from "@sinclair/typebox"

const GetTestResultsParams = Type.Object({
  testSlug: Type.String()
})

export type GetTestResultsParams = Static<typeof GetTestResultsParams>

export interface GetTestResults extends RouteGenericInterface {
  Params: GetTestResultsParams
}
