import { Answer } from "./Answer"
import { AnswersType } from "./AnswerType"

export type Question = {
  text: string
  answers: Answer[]
  answersType?: AnswersType
}
