import { FastifyPluginAsync } from "fastify"
import { compare } from "bcryptjs"

import { RegisterRequest, RegisterSchema } from "./schema/register.schema"
import { LoginRequest, LoginSchema } from "./schema/login.schema"
import userService from "../../services/user.service"
import errors from "../../constants/errors"

const UsersRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<RegisterRequest>("/", { schema: RegisterSchema }, async (request, reply) => {
    const { email } = request.body.user
    const existUser = await userService.findUser({ email })

    if (existUser) throw fastify.httpErrors.badRequest(errors.ALREADY_REGISTERED_ERROR)

    const createdUser = await userService.createUser(request.body)

    reply.status(201)
    return { user: userService.buildUserResponse(createdUser) }
  })

  fastify.post<LoginRequest>("/login", { schema: LoginSchema }, async (request, reply) => {
    const { email, password } = request.body.user
    const existUser = await userService.findUser({ email })

    if (!existUser) throw fastify.httpErrors.unauthorized(errors.USER_NOT_FOUND_ERROR)

    const isCorrectPass = await compare(password, existUser.passwordHash)

    if (!isCorrectPass) throw fastify.httpErrors.unauthorized(errors.WRONG_PASS_ERROR)

    reply.status(201)
    return { user: userService.buildUserResponse(existUser) }
  })
}

export default UsersRoute
