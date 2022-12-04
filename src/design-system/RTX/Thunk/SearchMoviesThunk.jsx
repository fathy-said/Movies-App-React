import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let SearchMoviesThunk = createAsyncThunk('SearchMoviesThunk/movies', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {
    if (arg.page == undefined) {
      let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1&include_adult=false&query=${arg.query}`)

      return res

    }
    else {
      let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=${arg.page}&include_adult=false&query=${arg.query}`)
      return res
    }
  } catch (e) {
    return rejectWithValue(e.message)
  }
})