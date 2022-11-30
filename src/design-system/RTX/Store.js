import { configureStore } from "@reduxjs/toolkit";
import TopRated from "./Reducers/TopRatedReducer"
import moviesSlice from "./Reducers/MoviesReducer.jsx"
import tvSlice from "./Reducers/TvReducer"
import SearchReducer from "./Reducers/SearchReducer"
let store = configureStore({
  reducer: {
    TopRated,
    moviesSlice,
    tvSlice,
    SearchReducer,
  }

})
export default store;