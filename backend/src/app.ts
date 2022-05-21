import { join } from "path"
import AutoLoad, { AutoloadPluginOptions } from "fastify-autoload"
import { FastifyPluginAsync } from "fastify"

export type AppOptions = {
  // Custom options for app
} & Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    ignorePattern: /.*(test|spec|schema).js/,
    options: opts
  })
}

export default app
export { app }
