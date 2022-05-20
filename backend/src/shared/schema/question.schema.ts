import { Type } from "@sinclair/typebox"

import { Answer } from "./answer.schema"
import { AnswersType } from "./../types/AnswersType"

export const Question = Type.Object({
  text: Type.String(),
  answers: Type.Array(Answer),
  answersType: Type.Enum(AnswersType)
})
