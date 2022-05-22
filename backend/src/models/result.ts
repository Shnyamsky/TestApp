import { getModelForClass, prop } from "@typegoose/typegoose"
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

export class Result extends TimeStamps {
  @prop({ required: true })
  public name!: string

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
