import { configureStore } from "@reduxjs/toolkit";
import TopRated from "./Reducers/TopRatedReducer"
import moviesSlice from "./Reducers/MoviesReducer.jsx"
import tvSlice from "./Reducers/TvReducer"
import DetailReducer from "./Reducers/DetailReducer"
let store = configureStore({
  reducer: {
    TopRated,
    moviesSlice,
    tvSlice,
    DetailReducer,
  }

})
export default store;