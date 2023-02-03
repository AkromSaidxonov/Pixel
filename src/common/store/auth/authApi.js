import { apiSlice } from "../apiSlice/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
    registr: build.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
    verify: build.mutation({
      query: (body) => ({
        url: `/auth/verifyEmail`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
    reset: build.mutation({
      query: (email) => ({
        url: `/auth/forgetPassword?email=${email}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "data", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrMutation,
  useVerifyMutation,
  useResetMutation,
} = authApi;
