/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/authApi";
import { userApi } from "./user/user";
import { todoApi } from "./todo/todo";
import { todoListApi } from "./todo/todoList";

const store = configureStore({
	reducer: {
		authSlice,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[todoApi.reducerPath]: todoApi.reducer,
		[todoListApi.reducerPath]: todoListApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			userApi.middleware,
			todoApi.middleware,
			todoListApi.middleware
		),
	devTools: true,
});
export default store;
setupListeners(store.dispatch);
