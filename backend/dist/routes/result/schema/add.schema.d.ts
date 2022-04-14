import { FastifySchema } from "fastify";
import { Static } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify/types/route";
declare const AddResultDto: import("@sinclair/typebox").TObject<{
    result: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        score: import("@sinclair/typebox").TNumber;
        testName: import("@sinclair/typebox").TString;
    }>;
}>;
export declare type AddResultDto = Static<typeof AddResultDto>;
export interface AddResult extends RouteGenericInterface {
    Body: AddResultDto;
}
export declare const AddResultSchema: FastifySchema;
export {};
