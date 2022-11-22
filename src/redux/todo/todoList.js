/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem("token");
export const todoListApi = createApi({
	reducerPath: "reqres/todoList",
	tagTypes: ["todoList"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pixel-inc.herokuapp.com/api",
		prepareHeaders: (headers, { getState }) => {
			//   const token = getState().authSlice.token;

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (build) => ({
		getTodoList: build.query({
			query: (id) => `todos/${id}`,

			providesTags: (result) =>
				result.data && result.data.list
					? [
							...result.data.list.map(({ id }) => ({ type: "todoList", id })),
							{ type: "todoList", id: "LIST" },
					  ]
					: [{ type: "todoList", id: "LIST" }],
		}),
		deleteTodoList: build.mutation({
			query: (id) => ({
				url: `/todoList/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "todoList", id: "LIST" }],
		}),
		addTodoList: build.mutation({
			query: (body) => ({
				url: `/todoList`,
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "todoList", id: "LIST" }],
		}),
		finshTodoList: build.mutation({
			query: (id) => ({
				url: `todoList/${id}`,
				method: "PUT",
			}),
			invalidatesTags: [{ type: "todoList", id: "LIST" }],
		}),
		editTodoList: build.mutation({
			query: (body) => ({
				url: `/todoList`,
				method: "PUT",
				body,
			}),
			invalidatesTags: [{ type: "todoList", id: "LIST" }],
		}),
	}),
});

export const {
	useAddTodoListMutation,
	useDeleteTodoListMutation,
	useEditTodoListMutation,
	useFinshTodoListMutation,
	useGetTodoListQuery,
} = todoListApi;
