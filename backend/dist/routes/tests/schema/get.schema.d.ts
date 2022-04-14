import { Static } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify/types/route";
declare const GetTestParams: import("@sinclair/typebox").TObject<{
    slug: import("@sinclair/typebox").TString;
}>;
export declare type GetTestParams = Static<typeof GetTestParams>;
export interface GetTest extends RouteGenericInterface {
    Params: GetTestParams;
}
export {};
