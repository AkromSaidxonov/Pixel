import { authApi } from "../auth/authApi";

export const todoApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query({
      query: (page = 0) => `/todos?pageNumber=${page}`,
      providesTags: (result) =>
        result?.data && result?.data?.list
          ? [
              ...result.data.list.map(({ id }) => ({ type: "todo", id })),
              { type: "todo", id: "LIST" },
            ]
          : [{ type: "todo", id: "LIST" }],
    }),
    getTodoFinished: build.query({
      query: (page = 0) => `/todos/finished?pageNumber=${page}`,
      providesTags: (result) =>
        result?.data && result?.data?.list
          ? [
              ...result?.data?.list.map(({ id }) => ({ type: "todo", id })),
              { type: "todo", id: "LIST" },
            ]
          : [{ type: "todo", id: "LIST" }],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    addTodo: build.mutation({
      query: (body) => ({
        url: `/todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    finshTodo: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    editTodo: build.mutation({
      query: (body) => ({
        url: `/todos`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
  }),
});

export const {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useFinshTodoMutation,
  useGetTodoQuery,
  useGetTodoFinishedQuery,
} = todoApi;
