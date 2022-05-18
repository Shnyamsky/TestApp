"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const schema_1 = require("../../../shared/schema");
const CreateUserDto = typebox_1.Type.Object({
  user: typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    surName: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
    email: typebox_1.Type.String({ format: "email" }),
  }),
});
exports.RegisterSchema = {
  body: CreateUserDto,
  response: {
    201: schema_1.UserReply,
    400: schema_1.ErrorReply,
  },
};
//# sourceMappingURL=register.schema.js.map
