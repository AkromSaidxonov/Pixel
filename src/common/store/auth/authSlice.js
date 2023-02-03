import { createSlice } from "@reduxjs/toolkit";

const accesToken = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: { token: accesToken, isLoading: false },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload;
    },
    isLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setCredentials, isLoading } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
