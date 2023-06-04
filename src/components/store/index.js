import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie";
import eventdaySlice from "./eventday";
import showtimeSlice from "./showtime";
import registerEventSlice from "./registerformovie";
import uiSlice from "./ui";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    eventday: eventdaySlice.reducer,
    showtime: showtimeSlice.reducer,
    registerEvent: registerEventSlice.reducer,
    ui: uiSlice.reducer,
  },
});
export default store;
