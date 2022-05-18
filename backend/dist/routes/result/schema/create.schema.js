"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const Answer = typebox_1.Type.Object({
  text: typebox_1.Type.String(),
  points: typebox_1.Type.Number(),
});
const Question = typebox_1.Type.Object({
  text: typebox_1.Type.String(),
  answers: typebox_1.Type.Array(Answer),
});
const CreateTestDto = typebox_1.Type.Object({
  test: typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    questions: typebox_1.Type.Array(Question),
  }),
});
exports.CreateTestSchema = {
  body: CreateTestDto,
};
//# sourceMappingURL=create.schema.js.map
