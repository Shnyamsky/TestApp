import { FastifySchema } from "fastify";
import { Static } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify/types/route";
declare const CreateTestDto: import("@sinclair/typebox").TObject<{
    test: import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        questions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            answers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
                points: import("@sinclair/typebox").TNumber;
            }>>;
        }>>;
    }>;
}>;
export declare type CreateTestDto = Static<typeof CreateTestDto>;
export interface CreateTest extends RouteGenericInterface {
    Body: CreateTestDto;
}
export declare const CreateTestSchema: FastifySchema;
export {};
