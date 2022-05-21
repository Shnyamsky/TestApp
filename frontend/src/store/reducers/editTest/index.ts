import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Answer, EditTestState, Question } from "./types"

const EMPTY_ANSWER: Answer = { text: "", points: 0 }
const EMPTY_QUESTION: Question = { text: "", answersType: "checkbox", answers: [EMPTY_ANSWER] }

const initialState: EditTestState = {
  title: "",
  questions: [EMPTY_QUESTION]
}

type AnswerPayload = { questionIndex: number; answerIndex: number }
type ChangeAnswerTitlePayload = { questionIndex: number; answerIndex: number; text: string }
type ChangeAnswerPointsPayload = { questionIndex: number; answerIndex: number; points: number }
type ChangeQuestionTypePayload = { questionIndex: number; value: "checkbox" | "radio" }

export const editTestSlice = createSlice({
  name: "editTest",
  initialState,
  reducers: {
    resetState: () => initialState,
    addQuestion: (state) => {
      state.questions.push(EMPTY_QUESTION)
    },
    addAnswer: (state, { payload }: PayloadAction<number>) => {
      if (state.questions[payload]) {
        state.questions[payload].answers.push(EMPTY_ANSWER)
      }
    },

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
    }),
    deleteQuestion: (state, { payload }: PayloadAction<{ questionIndex: number }>) => ({
      ...state,
      questions: state.questions.filter((_, index) => index !== payload.questionIndex)
    }),
    setupTest: (_, { payload }: PayloadAction<EditTestState>) => payload,

    changeTitle: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      title: payload
    }),

    changeAnswersType: (state, { payload }: PayloadAction<ChangeQuestionTypePayload>) => {
      state.questions[payload.questionIndex].answersType = payload.value
    },

    changeQuestionTitle: (state, { payload }: PayloadAction<{ questionIndex: number; text: string }>) => ({
      ...state,
      questions: state.questions.map((question, index) =>
        index === payload.questionIndex ? { ...question, text: payload.text, answers: question.answers } : question
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
