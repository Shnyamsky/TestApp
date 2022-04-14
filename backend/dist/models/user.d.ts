import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
export declare class User extends TimeStamps {
    email: string;
    name: string;
    surName: string;
    passwordHash: string;
}
export interface User extends Base {
}
declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
export default UserModel;
