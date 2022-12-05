import { createSlice } from "@reduxjs/toolkit";
let initState = { name: null }
let LogChangeReducer = createSlice({
  name: 'log',
  initialState: initState,
  reducers: {

    logInTest: (state, action) => {
      state.name = action.payload
    },
    logOutTest: (state, action) => {
      state.name = null
    }


  }


})
export default LogChangeReducer.reducer

export let { logInTest, logOutTest } = LogChangeReducer.actions