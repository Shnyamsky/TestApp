"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const mongoose_1 = require("mongoose");
exports.default = (0, fastify_plugin_1.default)(async (fastify, opts) => {
  (0, mongoose_1.connect)(process.env.MONGODB_URL, {
    autoIndex: true,
    autoCreate: true,
  })
    .then(() => fastify.log.info("MongoDB connected"))
    .catch(() => fastify.log.error("MongoDB connection lost"));
});
//# sourceMappingURL=mongodb.js.map
