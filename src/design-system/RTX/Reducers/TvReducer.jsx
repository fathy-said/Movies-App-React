import { createSlice } from "@reduxjs/toolkit";
import { getTvThunk } from "../Thunk/getTvThunk"



let initState = { dataTv: [] }
let tvSlice = createSlice({
  name: 'tvShows',
  initialState: initState,
  reducers: {},
  extraReducers: {
    [getTvThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [getTvThunk.fulfilled]: (state, action) => {
      let data = action.payload.results
      state.dataTv = data
    },
    [getTvThunk.rejected]: (state, action) => {
      console.log("rejected");


    },

  },

})
export default tvSlice.reducer
// let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1')
