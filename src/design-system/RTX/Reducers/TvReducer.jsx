import { createSlice } from "@reduxjs/toolkit";
import { getTvThunk } from "../Thunk/getTvThunk"
import { SearchTvThunk } from "../Thunk/SearchTvThunk"

let initState = { dataTv: [], totalPages: 1, loadingTv: false }
let tvSlice = createSlice({
  name: 'tvShows',
  initialState: initState,
  reducers: {},
  extraReducers: {
    [getTvThunk.pending]: (state, action) => {
      // console.log("pending");
      state.loadingTv = true;
    },
    [getTvThunk.fulfilled]: (state, action) => {
      // let data = action.payload.results
      // state.totalPages = action.payload.total_pages
      let data = action.payload.data.results
      state.totalPages = action.payload.data.total_pages
      state.dataTv = data
      state.loadingTv = false;
    },
    [getTvThunk.rejected]: (state, action) => {
      console.log("rejected");
      state.loadingTv = false;
    },

    // ===========================================================
    [SearchTvThunk.pending]: (state, action) => {
      // console.log("pending");
      state.loadingTv = true;
    },
    [SearchTvThunk.fulfilled]: (state, action) => {
      // let data = action.payload.results
      // state.totalPages = action.payload.total_pages
      let data = action.payload.data.results
      state.totalPages = action.payload.data.total_pages
      state.dataTv = data
      state.loadingTv = false;
    },
    [SearchTvThunk.rejected]: (state, action) => {
      console.log("rejected");
      state.loadingTv = false;
    },
  },

})
export default tvSlice.reducer
// let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1')
