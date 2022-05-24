import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, EnterPayload } from "./types"
import { Student } from "../../../types"

const initialState: UserState = {
  name: null,
  surName: null,
  isAuthorized: false,
  isAdmin: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterAsGuest: (state, { payload }: PayloadAction<Student>) => {
      sessionStorage.setItem("auth", JSON.stringify({ ...payload, isAdmin: false }))

      return {
        ...state,
        ...payload,
        isAuthorized: true
      }
    },
    enterAsAdmin: (state, { payload }: PayloadAction<EnterPayload>) => {
      sessionStorage.setItem("auth", JSON.stringify({ ...payload, isAdmin: true }))

      return {
        ...state,
        ...payload,
        isAuthorized: true,
        isAdmin: true
      }
    },
    loginFromStorage: (state, { payload }: PayloadAction<(EnterPayload | Student) & { isAdmin: boolean }>) => ({
      ...state,
      ...payload,
      isAuthorized: true
    }),

    logout: () => {
      sessionStorage.clear()

      return initialState
    }
  }
})

export const userActions = userSlice.actions

export default userSlice.reducer
