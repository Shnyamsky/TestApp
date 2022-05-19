import { getModelForClass, prop } from "@typegoose/typegoose"
import { Base } from "@typegoose/typegoose/lib/defaultClasses"
import { Question } from "../shared/classes"

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
