"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const schema_1 = require("../../../shared/schema");
const LoginUserDto = typebox_1.Type.Object({
    user: typebox_1.Type.Object({
        email: typebox_1.Type.String({ format: "email" }),
        password: typebox_1.Type.String()
    })
});
exports.LoginSchema = {
    body: LoginUserDto,
    response: {
        200: schema_1.UserReply
    }
};
//# sourceMappingURL=login.schema.js.map