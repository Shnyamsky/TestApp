import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../index"
import { UserState, EnterPayload } from "./types"

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
    enterAsGuest: (state, { payload }: PayloadAction<EnterPayload>) => ({
      ...state,
      ...payload,
      isAuthorized: true
    }),
    enterAsAdmin: (state, { payload }: PayloadAction<EnterPayload>) => ({
      ...state,
      ...payload,
      isAuthorized: true,
      isAdmin: true
    })
  }
})

export const userActions = userSlice.actions

export default userSlice.reducer
