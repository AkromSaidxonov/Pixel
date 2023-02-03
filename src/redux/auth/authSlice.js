import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token,
    loading: "",
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setloading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});
export const { setToken, setloading } = authSlice.actions;
export default authSlice.reducer;
