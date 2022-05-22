import { Answer, AnswersType, Condition, Question } from "../../../types"

const EMPTY_ANSWER: Answer = { text: "", points: 0 }
const EMPTY_QUESTION: Question = { text: "", answersType: AnswersType.checkbox, answers: [EMPTY_ANSWER] }
const EMPTY_CONDITION: Condition = { text: "", score: 0 }

export { EMPTY_ANSWER, EMPTY_QUESTION, EMPTY_CONDITION }
