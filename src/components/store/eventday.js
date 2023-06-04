import { createSlice } from "@reduxjs/toolkit";

const eventdaySlice = createSlice({
  name: "eventday",
  initialState: { eventdays: [] },
  reducers: {
    setEventDays(state, { payload }) {
      state.eventdays = payload;
    },
  },
});

export const eventdayActions = eventdaySlice.actions;
export default eventdaySlice;
