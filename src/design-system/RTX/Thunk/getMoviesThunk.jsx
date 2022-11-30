import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { MoviesData, popularData } from "../../constants/data"
export let geMoviesThunk = createAsyncThunk('getMovieThunk/movies', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {
    let res = await MoviesData
    return (await res)
  }
  catch (er) {
    return rejectWithValue(er.message)
  }
})
// let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=1')