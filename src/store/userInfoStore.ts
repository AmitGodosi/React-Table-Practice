import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserInfoList } from "../types";

const initialState = {
  userInfo: [],
} as Partial<IUserInfoList>;

const userInfoStoreSlice = createSlice({
  name: "userInfoStore",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserInfoList>) => {
      const { userInfo } = action.payload;
      state.userInfo = userInfo;
    },
    deleteUserInfo: (state) => {
      state.userInfo = [];
    },
  },
});

export const setUserInfo = userInfoStoreSlice.actions.setUserInfo;
export const deleteUserInfo = userInfoStoreSlice.actions.deleteUserInfo;

export default userInfoStoreSlice.reducer;
