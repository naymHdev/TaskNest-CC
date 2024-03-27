import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    // get tasks in database
    getTasks: builder.query({
      query: () => "/taskMate/tasks",
      providesTags: ["Tasks"],
    }),
    // Post tasks in database
    postTask: builder.mutation({
      query: (data) => ({
        url: "/taskMate/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    // Update tasks in database
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/taskMate/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTasksQuery, usePostTaskMutation, useUpdateTaskMutation } =
  baseApi;

export default baseApi;
