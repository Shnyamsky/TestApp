import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
export declare class Result extends TimeStamps {
    name: string;
    testName: string;
    score: number;
}
export interface Result extends Base {
}
declare const ResultModel: import("@typegoose/typegoose").ReturnModelType<typeof Result, import("@typegoose/typegoose/lib/types").BeAnObject>;
export default ResultModel;
