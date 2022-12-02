import { createSlice } from "@reduxjs/toolkit";
import { DetailThunk } from "../Thunk/DetailThunk";
let initState = { detailData: {}, loading: false, }
let DetailReducer = createSlice({

  name: "search",
  initialState: initState,
  extraReducers: {
    [DetailThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [DetailThunk.fulfilled]: (state, action) => {
      let res = action.payload.data
      state.detailData = res
      state.loading = false;

    },
    [DetailThunk.rejected]: (state, action) => {
      console.log("rejected");
      state.loading = false;


    },


  }

})
export default DetailReducer.reducer