import { getModelForClass, prop } from "@typegoose/typegoose"
import { Base } from "@typegoose/typegoose/lib/defaultClasses"
import { AnswersType } from "../shared/types"

class Condition {
  @prop({ required: true })
  public score!: number

  @prop({ required: true })
  public text!: string
}

class Answer {
  @prop({ required: true })
  public text!: string

  @prop({ required: true })
  public points!: number
}

class Question {
  @prop({ required: true })
  public text!: string

  @prop({ enum: AnswersType, default: AnswersType.checkbox })
  public answersType?: AnswersType

  @prop({ required: true, type: () => Answer })
  public answers!: Answer[]
}

export class Test {
  @prop({ required: true })
  public title!: string

  @prop({ required: true, unique: true })
  public slug!: string

  @prop({ default: [], _id: false, type: () => Question })
  public questions!: Question[]

  @prop({ default: [], _id: false, type: () => Condition })
  public conditions!: Condition[]
}

export interface Test extends Base {}

const TestModel = getModelForClass(Test)

export default TestModel
