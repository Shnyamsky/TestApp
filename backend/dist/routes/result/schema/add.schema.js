"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddResultSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const AddResultDto = typebox_1.Type.Object({
  result: typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    score: typebox_1.Type.Number(),
    testName: typebox_1.Type.String(),
  }),
});
exports.AddResultSchema = {
  body: AddResultDto,
};
//# sourceMappingURL=add.schema.js.map
