import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import { TUser } from "../../../types/Type";
type TAuthState = {
  user: null | TUser;
  token: null | TUser;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const seleteCurrentUser = (state: RootState) => state.auth.user;
