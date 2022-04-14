import { Base } from "@typegoose/typegoose/lib/defaultClasses";
export declare class Answer {
    text: string;
    points: number;
}
export declare class Question {
    text: string;
    answers: Answer[];
}
export declare class Test {
    title: string;
    slug: string;
    questions: Question[];
}
export interface Test extends Base {
}
declare const TestModel: import("@typegoose/typegoose").ReturnModelType<typeof Test, import("@typegoose/typegoose/lib/types").BeAnObject>;
export default TestModel;
