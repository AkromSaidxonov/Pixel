import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem('token')
export const userApi = createApi({
  reducerPath: "reqres/user",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pixel-inc.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().authSlice.token;
    // console.log(getState().authSlice.token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => '/profil',
      providesTags: (result) =>
        result.data && result.data
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
        body
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
        body
      }),
      invalidatesTags: [{ type: "user", id: "LIST" }],
    }),
    getUserInfo: build.query({
      query: () => '/home/userCount',
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
useConfirmDeleteUserMutation
} = userApi;
