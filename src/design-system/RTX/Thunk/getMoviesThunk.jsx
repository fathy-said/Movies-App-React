import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { MoviesData, popularData } from "../../constants/data"
export let geMoviesThunk = createAsyncThunk('getMovieThunk/movies', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  // try {
  //   if (arg == undefined) {
  //     let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=${1}`)

  //     return (await res)
  //   }
  //   else {
  //     let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=833de2449af3a163ce0f0f6f8b39d2a8&language=en-US&page=${arg.page}`)
  //     return (await res)
  //   }
  // }
  try {
    if (arg == undefined) {
      let res = await MoviesData
      return (await res)
    }
    else {
      let res = await MoviesData
      return (await res)
    }
  }
  catch (er) {
    return rejectWithValue(er.message)
  }

})
