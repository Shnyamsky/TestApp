import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { AnswersType } from "../../../types"
import { EMPTY_QUESTION } from "./const"
import { EditTestState } from "./types"

type ChangeQuestionTypePayload = { questionIndex: number; value: AnswersType }

const questionReducers: SliceCaseReducers<EditTestState> = {
  addQuestion: (state) => {
    state.questions.push(EMPTY_QUESTION)
  },
  deleteQuestion: (state, { payload }: PayloadAction<{ questionIndex: number }>) => ({
    ...state,
    questions: state.questions.filter((_, index) => index !== payload.questionIndex)
  }),

  changeAnswersType: (state, { payload }: PayloadAction<ChangeQuestionTypePayload>) => {
    state.questions[payload.questionIndex].answersType = payload.value
  },

  changeQuestionTitle: (state, { payload }: PayloadAction<{ questionIndex: number; text: string }>) => ({
    ...state,
    questions: state.questions.map((question, index) =>
      index === payload.questionIndex ? { ...question, text: payload.text, answers: question.answers } : question
    )
  })
}

export { questionReducers }
