import { getModelForClass, prop } from "@typegoose/typegoose"
import { Base } from "@typegoose/typegoose/lib/defaultClasses"

export class Answer {
  text: string
  points: number
}

export class Question {
  text: string
  answers: Answer[]
}

export class Test {
  @prop({ required: true })
  public title: string

  @prop({ required: true, unique: true })
  public slug: string

  @prop({ default: [], _id: false })
  public questions: Question[]
}

export interface Test extends Base {}

const TestModel = getModelForClass(Test)

export default TestModel
