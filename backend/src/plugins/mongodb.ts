import fp from "fastify-plugin"
import { connect } from "mongoose"

export default fp(async (fastify, opts) => {
  connect(process.env.MONGODB_URL!, { autoIndex: true, autoCreate: true })
    .then(() => fastify.log.info("MongoDB connected"))
    .catch(() => fastify.log.error("MongoDB connection lost"))
})
