import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { EMPTY_CONDITION } from "./const"
import { EditTestState } from "./types"

const conditionReducers: SliceCaseReducers<EditTestState> = {
  addCondition: (state) => {
    state.conditions.push(EMPTY_CONDITION)
  },
  deleteCondition: (state, { payload }: PayloadAction<{ conditionIndex: number }>) => ({
    ...state,
    conditions: state.conditions.filter((_, index) => index !== payload.conditionIndex)
  }),

  changeConditionText: (state, { payload }: PayloadAction<{ conditionIndex: number; text: string }>) => ({
    ...state,
    conditions: state.conditions.map((condition, index) =>
      index === payload.conditionIndex ? { ...condition, text: payload.text } : condition
    )
  }),

  changeConditionScore: (state, { payload }: PayloadAction<{ conditionIndex: number; score: number }>) => ({
    ...state,
    conditions: state.conditions.map((condition, index) =>
      index === payload.conditionIndex ? { ...condition, score: payload.score } : condition
    )
  })
}

export { conditionReducers }
