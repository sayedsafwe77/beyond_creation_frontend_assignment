import { createSlice } from "@reduxjs/toolkit";

const showtimeSlice = createSlice({
  name: "showtime",
  initialState: { showtimes: [] },
  reducers: {
    setShowTimes(state, { payload }) {
      state.showtimes = payload;
    },
  },
});

export const showtimeActions = showtimeSlice.actions;
export default showtimeSlice;
