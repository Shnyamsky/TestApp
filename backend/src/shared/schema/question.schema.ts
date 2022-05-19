import { Type } from "@sinclair/typebox"
import { Answer } from "./answer.schema"

export const Question = Type.Object({
  text: Type.String(),
  answers: Type.Array(Answer)
})
