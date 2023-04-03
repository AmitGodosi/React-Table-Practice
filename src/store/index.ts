import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetailsStore";
import userInfoReducer from "./userInfoStore";

export const store: any = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    userInfo: userInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
