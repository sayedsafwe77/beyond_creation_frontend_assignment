import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { show_create_event: true },
  reducers: {
    setShowCreateEvent(state, { payload }) {
      state.show_create_event = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
