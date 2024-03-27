import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // get data in database
    getTasks: builder.query({
      query: () => "/taskMate/tasks",
    }),
    // Post data in database
    postTask: builder.mutation({
      query: (post) => ({
        url: "/taskMate/tasks",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetTasksQuery, usePostTaskMutation } = baseApi;

export default baseApi;
