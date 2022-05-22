import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { EMPTY_ANSWER } from "./const"
import { EditTestState } from "./types"

type AnswerPayload = { questionIndex: number; answerIndex: number }
type ChangeAnswerTitlePayload = { questionIndex: number; answerIndex: number; text: string }
type ChangeAnswerPointsPayload = { questionIndex: number; answerIndex: number; points: number }

const answerReducers: SliceCaseReducers<EditTestState> = {
  addAnswer: (state, { payload }: PayloadAction<number>) => {
    if (state.questions[payload]) {
      state.questions[payload].answers.push(EMPTY_ANSWER)
    }
  },

  changeAnswerTitle: (state, { payload }: PayloadAction<ChangeAnswerTitlePayload>) => ({
    ...state,
    questions: state.questions.map((question, index) =>
      index === payload.questionIndex
        ? {
            ...question,
            answers: question.answers.map((answer, answerInd) =>
              answerInd === payload.answerIndex ? { ...answer, text: payload.text } : answer
            )
          }
        : question
    )
  }),

  changeAnswerPoints: (state, { payload }: PayloadAction<ChangeAnswerPointsPayload>) => ({
    ...state,
    questions: state.questions.map((question, index) =>
      index === payload.questionIndex
        ? {
            ...question,
            answers: question.answers.map((answer, answerInd) =>
              answerInd === payload.answerIndex ? { ...answer, points: payload.points } : answer
            )
          }
        : question
    )
  }),

  deleteAnswer: (state, { payload }: PayloadAction<AnswerPayload>) => ({
    ...state,
    questions: state.questions.map((question, questionIndex) =>
      questionIndex === payload.questionIndex
        ? {
            ...question,
            answers: question.answers.filter((_, answerIndex) => answerIndex !== payload.answerIndex)
          }
        : question
    )
  })
}

export { answerReducers }
