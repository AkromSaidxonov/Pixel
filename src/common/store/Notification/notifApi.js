import { authApi } from "../auth/authApi";

const notifApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getNotif: build.query({
      query: () => `/today`,
      providesTags: (result) =>
        result?.data && result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "user", id })),
              { type: "user", id: "LIST" },
            ]
          : [{ type: "user", id: "LIST" }],
    }),
  }),
});

export const { useGetNotifQuery } = notifApi;
