import { createSlice } from "@reduxjs/toolkit";
import { searchThunk } from "../Thunk/searchThunk";
let initState = { detailData: {}, loading: false, }
let SearchReducer = createSlice({

  name: "search",
  initialState: initState,
  extraReducers: {
    [searchThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [searchThunk.fulfilled]: (state, action) => {
      let res = action.payload.data
      state.detailData = res
      state.loading = false;

    },
    [searchThunk.rejected]: (state, action) => {
      console.log("rejected");
      state.loading = false;


    },


  }

})
export default SearchReducer.reducer