import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  data: {
    location: null,
    weather: {
      date: null,
      forecast: null,
      minMax: { max: null, min: null },
      temperature: null,
      feelsLike: null,
      wind: null,
      humidity: null,
    },
  },
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async ({ location, type }, thunkAPI) => {
    const response = await axios.post("http://localhost:8000/weather", {
      location,
      type: type,
    });
    return response.data;
  }
);

// https://weather-app-hcot.onrender.com/weather
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
