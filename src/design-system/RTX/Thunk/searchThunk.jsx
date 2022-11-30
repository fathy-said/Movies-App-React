import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let searchThunk = createAsyncThunk('searchThunk/search', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {

    let res = await axios.get(`https://api.themoviedb.org/3/${arg.type}/${arg.id}?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US`)


    return (await res)


  } catch (error) {
    return rejectWithValue(error.message)
  }
})