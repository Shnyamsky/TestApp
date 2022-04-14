"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const register_schema_1 = require("./schema/register.schema");
const login_schema_1 = require("./schema/login.schema");
const user_service_1 = require("../../services/user.service");
const errors_1 = require("../../constants/errors");
const UsersRoute = async (fastify) => {
    fastify.post("/", { schema: register_schema_1.RegisterSchema }, async (request, reply) => {
        const { email } = request.body.user;
        const existUser = await user_service_1.default.findUser({ email });
        if (existUser)
            throw fastify.httpErrors.badRequest(errors_1.default.ALREADY_REGISTERED_ERROR);
        const createdUser = await user_service_1.default.createUser(request.body);
        reply.status(201);
        return { user: user_service_1.default.buildUserResponse(createdUser) };
    });
    fastify.post("/login", { schema: login_schema_1.LoginSchema }, async (request, reply) => {
        const { email, password } = request.body.user;
        const existUser = await user_service_1.default.findUser({ email });
        if (!existUser)
            throw fastify.httpErrors.unauthorized(errors_1.default.USER_NOT_FOUND_ERROR);
        const isCorrectPass = await (0, bcryptjs_1.compare)(password, existUser.passwordHash);
        if (!isCorrectPass)
            throw fastify.httpErrors.unauthorized(errors_1.default.WRONG_PASS_ERROR);
        reply.status(201);
        return { user: user_service_1.default.buildUserResponse(existUser) };
    });
};
exports.default = UsersRoute;
//# sourceMappingURL=index.js.map