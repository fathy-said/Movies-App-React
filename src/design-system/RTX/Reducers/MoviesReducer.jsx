import { createSlice } from "@reduxjs/toolkit";
import { geMoviesThunk } from "../Thunk/getMoviesThunk"
import { SearchMoviesThunk } from "../Thunk/SearchMoviesThunk"
let initState = { dataMovie: [], totalPages: 1, loadingMovie: false }
let moviesSlice = createSlice({
  name: "movies",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [geMoviesThunk.pending]: (state, action) => {
      state.loadingMovie = true

    },
    [geMoviesThunk.fulfilled]: (state, action) => {
      let data = action.payload.data.results
      state.totalPages = action.payload.data.total_pages

      // let data = action.payload.results
      // state.totalPages = action.payload.total_pages
      state.dataMovie = data
      state.loadingMovie = false

    },
    [geMoviesThunk.rejected]: (state, action) => {
      console.log("rejected")
      state.loadingMovie = false

    },
    [SearchMoviesThunk.pending]: (state, action) => {
      state.loadingMovie = true

    },
    [SearchMoviesThunk.fulfilled]: (state, action) => {
      let data = action.payload.data.results
      state.totalPages = action.payload.data.total_pages
      state.dataMovie = data
      state.loadingMovie = false

    },
    [SearchMoviesThunk.rejected]: (state, action) => {
      console.log("rejected")
      state.loadingMovie = false

    },

  }
})
export default moviesSlice.reducer
