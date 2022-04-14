"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../../models/test");
const create_schema_1 = require("./schema/create.schema");
const TestsRoute = async (fastify) => {
    fastify.post("/", { schema: create_schema_1.CreateTestSchema }, async (request, reply) => {
        const newTest = await test_1.default.create(request.body.test);
        return newTest;
    });
    fastify.get("/:slug", async (request, reply) => {
        return await test_1.default.findOne({ slug: request.params.slug });
    });
    fastify.put("/", { schema: create_schema_1.CreateTestSchema }, async (request, reply) => {
        return await test_1.default.updateOne({ slug: request.body.test.slug }, request.body.test);
    });
    fastify.get("/", async (request, reply) => {
        return await test_1.default.find().exec();
    });
};
exports.default = TestsRoute;
//# sourceMappingURL=index.js.map