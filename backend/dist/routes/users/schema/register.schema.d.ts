import { Static } from "@sinclair/typebox";
import { FastifySchema } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";
import { UserReplyType } from "../../../shared/schema";
declare const CreateUserDto: import("@sinclair/typebox").TObject<{
    user: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        surName: import("@sinclair/typebox").TString;
        password: import("@sinclair/typebox").TString;
        email: import("@sinclair/typebox").TString;
    }>;
}>;
export declare type CreateUserDto = Static<typeof CreateUserDto>;
export interface RegisterRequest extends RouteGenericInterface {
    Body: CreateUserDto;
    Reply: UserReplyType;
}
export declare const RegisterSchema: FastifySchema;
export {};
