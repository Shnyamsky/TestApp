"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const fastify_cors_1 = require("fastify-cors");
exports.default = (0, fastify_plugin_1.default)(async (fastify, opts) => {
  fastify.register(fastify_cors_1.default, {
    origin: "*",
    methods: ["GET", "PUT", "POST"],
    allowedHeaders: ["Content-Type"],
    preflightContinue: false,
  });
});
//# sourceMappingURL=cors.js.map
