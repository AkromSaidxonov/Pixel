import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/authApi";


const store = configureStore({
  reducer: {
    authSlice,
    [authApi.reducerPath]: authApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware
    ),
  devTools: true,
});
export default store;
setupListeners(store.dispatch);

