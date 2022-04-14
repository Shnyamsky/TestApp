import { Static } from "@sinclair/typebox";
export declare const UserReply: import("@sinclair/typebox").TObject<{
    user: import("@sinclair/typebox").TObject<{
        email: import("@sinclair/typebox").TString;
        surName: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
    }>;
}>;
export declare type UserReplyType = Static<typeof UserReply>;
