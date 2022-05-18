"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../../models/result");
const add_schema_1 = require("./schema/add.schema");
const TestsRoute = async (fastify) => {
  fastify.post(
    "/",
    { schema: add_schema_1.AddResultSchema },
    async (request, reply) => {
      return await result_1.default.create(request.body.result);
    }
  );
  fastify.get("/", async (request, reply) => {
    return await result_1.default.find();
  });
};
exports.default = TestsRoute;
//# sourceMappingURL=index.js.map
