import { authApi } from "../auth/authApi";

const users = authApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => `/profil`,
      providesTags: (result) =>
        result?.data && result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "user", id })),
              { type: "user", id: "LIST" },
            ]
          : [{ type: "user", id: "LIST" }],
    }),
    deleteUser: build.mutation({
      query: (email) => ({
        url: `/deletedSendingCode?email=${email}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "user", id: "LIST" }],
    }),
    confirmDeleteUser: build.mutation({
      query: (body) => ({
        url: `/deleted`,
        method: "Delete",
        body,
      }),
      invalidatesTags: [{ type: "user", id: "LIST" }],
    }),
    deleteImg: build.mutation({
      query: (id) => ({
        url: `/attachment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "user", id: "LIST" }],
    }),
    setImgUser: build.mutation({
      query: (body) => ({
        url: `/attachment`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "user", id: "LIST" }],
    }),
    getUserInfo: build.query({
      query: () => "/home/userCount",
      providesTags: (result) =>
        result.data && result.data
          ? [
              ...result.data.map(({ id }) => ({ type: "user", id })),
              { type: "user", id: "LIST" },
            ]
          : [{ type: "user", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useDeleteUserMutation,
  useGetUserInfoQuery,
  useSetImgUserMutation,
  useDeleteImgMutation,
  useConfirmDeleteUserMutation,
} = users;
