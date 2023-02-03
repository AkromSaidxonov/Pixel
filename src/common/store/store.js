import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice/apiSlice";
// import { authReducer } from "./auth/authSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
