import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerData: null,
    topRatedMovies: null,
    upcomingMovies: null,
    genreData: null,
    genreMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerData = action.payload;
    },
    addGenreData: (state, action) => {
      state.genreData = action.payload;
    },
    addGenreMovies: (state, action) => {
      state.genreMovies.push(action.payload);
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailer,
  addGenreData,
  addGenreMovies,
} = moviesSlice.actions;
