import { createSlice } from "@reduxjs/toolkit";
import { geMoviesThunk } from "../Thunk/getMoviesThunk"
let initState = { dataMovie: [] }
let moviesSlice = createSlice({
  name: "movies",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [geMoviesThunk.pending]: (state, action) => {
    },
    [geMoviesThunk.fulfilled]: (state, action) => {
      let data = action.payload.results
      state.dataMovie = data
    },
    [geMoviesThunk.rejected]: (state, action) => {
      console.log("rejected")
    },

  }
})
export default moviesSlice.reducer
