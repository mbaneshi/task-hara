import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pictureReducer from "../features/picture/pictureSlice";

export const store = configureStore({
  reducer: {
    picture: pictureReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
