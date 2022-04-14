import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./reducers/user"
import editTestReducer from "./reducers/editTest"

export const store = configureStore({
  reducer: {
    user: userReducer,
    editTest: editTestReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
