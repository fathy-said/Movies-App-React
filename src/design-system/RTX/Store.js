import { configureStore } from "@reduxjs/toolkit";
import TopRated from "./Reducers/TopRatedReducer"
import moviesSlice from "./Reducers/MoviesReducer.jsx"
import tvSlice from "./Reducers/TvReducer"
import DetailReducer from "./Reducers/DetailReducer"
import LogChangeReducer from "./Reducers/LogChangeReducer"
let store = configureStore({
  reducer: {
    TopRated,
    moviesSlice,
    tvSlice,
    DetailReducer,
    LogChangeReducer,
  }

})
export default store;