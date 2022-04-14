"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorReply = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.ErrorReply = typebox_1.Type.Object({
    statusCode: typebox_1.Type.Number(),
    error: typebox_1.Type.String(),
    message: typebox_1.Type.String()
});
//# sourceMappingURL=error.schema.js.map