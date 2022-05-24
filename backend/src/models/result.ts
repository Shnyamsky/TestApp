import { getModelForClass, prop } from "@typegoose/typegoose"
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

class Student {
  @prop({ required: true })
  public name!: string

  @prop({ required: true })
  public surName!: string

  @prop({ deafult: "" })
  public studyGroup!: string

  @prop({ deafult: "" })
  public studyYear!: string
}

export class Result extends TimeStamps {
  @prop({ required: true })
  public student!: Student

  @prop({ required: true })
  public testSlug!: string

  @prop({ required: true })
  public text!: string

  @prop({ required: true })
  public score!: number
}

export interface Result extends Base {}

const ResultModel = getModelForClass(Result)

export default ResultModel
