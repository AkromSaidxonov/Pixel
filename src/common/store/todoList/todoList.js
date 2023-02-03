import { authApi } from "../auth/authApi";

const todoList = authApi.injectEndpoints({
  endpoints: (build) => ({
    getTodoList: build.query({
      query: (id) => `todos/${id}`,

      providesTags: (result) =>
        result?.data && result?.data?.list
          ? [
              ...result?.data?.list.map(({ id }) => ({ type: "todoList", id })),
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
} = todoList;
