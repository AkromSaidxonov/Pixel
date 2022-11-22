/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "reqres/api",
	tagTypes: ["data"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pixel-inc.herokuapp.com/api",
	}),
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
