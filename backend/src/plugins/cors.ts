import fp from "fastify-plugin"
import fastifyCors from "fastify-cors"

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify, opts) => {
  fastify.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "PUT", "POST"],
    allowedHeaders: ["Content-Type"],
    preflightContinue: false
  })
})
