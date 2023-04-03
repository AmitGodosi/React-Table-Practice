import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState = {
  isUserLogged: false,
  userDetails: {},
} as Partial<IUser>;

const userDetailsStoreSlice = createSlice({
  name: "userDetailsStore",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<IUser>) => {
      const { userDetails, isUserLogged } = action.payload;
      state.isUserLogged = isUserLogged;
      state.userDetails = userDetails;
    },
    logout: (state) => {
      state.isUserLogged = false;
      state.userDetails = {};
    },
  },
});

export const setUserDetails = userDetailsStoreSlice.actions.setUserDetails;
export const logout = userDetailsStoreSlice.actions.logout;

export default userDetailsStoreSlice.reducer;
