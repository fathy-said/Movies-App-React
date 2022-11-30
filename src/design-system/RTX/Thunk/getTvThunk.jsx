import { createAsyncThunk } from "@reduxjs/toolkit";
import { tvShows } from "../../constants/data";
export let getTvThunk = createAsyncThunk('getTvThunk/tvShows', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {
    let res = await tvShows
    return res
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
// https://api.themoviedb.org/3/tv/popular?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1