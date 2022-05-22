import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { answerReducers } from "./answerReducers"
import { conditionReducers } from "./conditionReducers"
import { EMPTY_CONDITION, EMPTY_QUESTION } from "./const"
import { questionReducers } from "./questionReducers"
import { EditTestState } from "./types"

const initialState: EditTestState = {
  title: "",
  questions: [EMPTY_QUESTION],
  conditions: [EMPTY_CONDITION]
}

export const editTestSlice = createSlice<EditTestState, SliceCaseReducers<EditTestState>>({
  name: "editTest",
  initialState,
  reducers: {
    resetState: (_) => initialState,

    setupTest: (_, { payload }: PayloadAction<EditTestState>) => payload,

    changeTitle: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      title: payload
    }),

    ...questionReducers,
    ...answerReducers,
    ...conditionReducers
  }
})

export const editActions = editTestSlice.actions

export default editTestSlice.reducer
