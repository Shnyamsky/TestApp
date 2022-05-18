import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EditTestState } from "./types"

const initialState: EditTestState = {
  title: "",
  questions: []
}

type ChangeAnswerTitlePayload = { questionIndex: number; answerIndex: number; text: string }
type ChangeAnswerPointsPayload = { questionIndex: number; answerIndex: number; points: number }

export const editTestSlice = createSlice({
  name: "editTest",
  initialState,
  reducers: {
    setupTest: (_, { payload }: PayloadAction<EditTestState>) => payload,

    changeTitle: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      title: payload
    }),

    changeQuestionTitle: (state, { payload }: PayloadAction<{ questionIndex: number; text: string }>) => ({
      ...state,
      questions: state.questions.map((question, index) =>
        index === payload.questionIndex ? { text: payload.text, answers: question.answers } : question
      )
    }),

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
    })
  }
})

export const editActions = editTestSlice.actions

export default editTestSlice.reducer
