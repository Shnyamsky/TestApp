import { FastifySchema } from "fastify";
import { Static } from "@sinclair/typebox";
import { UserReplyType } from "../../../shared/schema";
import { RouteGenericInterface } from "fastify/types/route";
declare const LoginUserDto: import("@sinclair/typebox").TObject<{
    user: import("@sinclair/typebox").TObject<{
        email: import("@sinclair/typebox").TString;
        password: import("@sinclair/typebox").TString;
    }>;
}>;
export declare type LoginUserDto = Static<typeof LoginUserDto>;
export interface LoginRequest extends RouteGenericInterface {
    Body: LoginUserDto;
    Reply: UserReplyType;
}
export declare const LoginSchema: FastifySchema;
export {};
