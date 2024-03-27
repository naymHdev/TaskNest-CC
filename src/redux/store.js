import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import tasksSlice from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasksSlice: tasksSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
