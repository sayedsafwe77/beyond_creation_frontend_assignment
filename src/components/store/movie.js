import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { search: "", movies: [] },
  reducers: {
    setMovies(state, { payload }) {
      state.movies = payload;
    },
    search(state, { payload }) {
      state.search = payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
