import { createSlice } from "@reduxjs/toolkit";

const registerEventSlice = createSlice({
  name: "register_event",
  initialState: {
    movie_id: "",
    eventday_id: "",
    showtime_id: "",
    name: "",
    email: "",
    mobile: "",
    new_event: {},
  },
  reducers: {
    setMovieId(state, { payload }) {
      state.movie_id = payload;
    },
    setEventDayId(state, { payload }) {
      state.eventday_id = payload;
    },
    setShowTimeId(state, { payload }) {
      state.showtime_id = payload;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    setEmail(state, { payload }) {
      state.email = payload;
    },
    setMobile(state, { payload }) {
      state.mobile = payload;
    },
    setNewEvent(state, { payload }) {
      state.new_event = payload;
    },
  },
});

export const registerEventActions = registerEventSlice.actions;
export default registerEventSlice;
