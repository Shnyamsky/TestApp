"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const bcryptjs_1 = require("bcryptjs");
const user_1 = require("../models/user");
class UserService {
    async findUser({ email }) {
        const user = await user_1.default.findOne({ email }).exec();
        if (!user)
            return null;
        return user.toObject();
    }
    async createUser({ user }) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = await user_1.default.create({
            ...user,
            passwordHash: await (0, bcryptjs_1.hash)(user.password, salt)
        });
        return newUser.toObject();
    }
    buildUserResponse(user) {
        const userResponse = (0, ramda_1.pick)(["email", "name", "surName"], user);
        return userResponse;
    }
}
const userService = new UserService();
exports.default = userService;
//# sourceMappingURL=user.service.js.map