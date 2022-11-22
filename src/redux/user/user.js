import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem('token')
export const userApi = createApi({
  reducerPath: "reqres/user",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pixel-inc.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
    //   const token = getState().authSlice.token;
    console.log(token);
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
      query: (id) => ({
        url: `/car/${id}`,
        method: "DELETE",
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
useGetUserInfoQuery
} = userApi;
