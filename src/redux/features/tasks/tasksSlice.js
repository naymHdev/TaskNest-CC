import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      time: "27 Mar 2024",
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Naym Hossen",
      priority: "low",
    },
  ],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length == 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastEl = state.tasks.at(-1);
        state.tasks.push({ id: lastEl.id + 1, status: "pending", ...payload });
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
