"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReply = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.UserReply = typebox_1.Type.Object({
  user: typebox_1.Type.Object({
    email: typebox_1.Type.String({ format: "email" }),
    surName: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
  }),
});
//# sourceMappingURL=user-reply.schema.js.map
