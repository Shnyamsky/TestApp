import { User } from "../models/user";
import { CreateUserDto } from "../routes/users/schema/register.schema";
declare class UserService {
    findUser({ email }: {
        email: string;
    }): Promise<User | null>;
    createUser({ user }: CreateUserDto): Promise<User>;
    buildUserResponse(user: User): Pick<User, "email" | "name" | "surName">;
}
declare const userService: UserService;
export default userService;
