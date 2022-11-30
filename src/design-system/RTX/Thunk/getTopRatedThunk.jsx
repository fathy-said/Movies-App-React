import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { topRatedData, MoviesData } from "../../constants/data"
export let getTopRatedThunk = createAsyncThunk('getTopRatedThunk/topRated', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI

  try {
    let res = await topRatedData
    return (await res)

  }
  catch (er) {
    return rejectWithValue(er.message)
  }

})
// let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1')
