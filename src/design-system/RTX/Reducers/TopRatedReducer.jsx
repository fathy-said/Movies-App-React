import { createSlice } from "@reduxjs/toolkit";
import { getTopRatedThunk } from "../Thunk/getTopRatedThunk"
let initState = { dataTop: [] }
let popularSlice = createSlice({
  name: "topRated",
  initialState: initState,
  reducers: {},

  extraReducers: {
    [getTopRatedThunk.pending]: (state, action) => {
    },
    [getTopRatedThunk.fulfilled]: (state, action) => {
      let data = action.payload.results
      state.dataTop = data
    },
    [getTopRatedThunk.rejected]: (state, action) => {
    },

  }
})
export default popularSlice.reducer
