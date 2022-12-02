import { createSlice } from "@reduxjs/toolkit";
import { geMoviesThunk } from "../Thunk/getMoviesThunk"
let initState = { dataMovie: [], totalPages: 1 }
let moviesSlice = createSlice({
  name: "movies",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [geMoviesThunk.pending]: (state, action) => {
    },
    [geMoviesThunk.fulfilled]: (state, action) => {
      // let data = action.payload.data.results
      // state.totalPages = action.payload.data.total_pages

      let data = action.payload.results
      state.totalPages = action.payload.total_pages
      state.dataMovie = data

    },
    [geMoviesThunk.rejected]: (state, action) => {
      console.log("rejected")
    },

  }
})
export default moviesSlice.reducer
