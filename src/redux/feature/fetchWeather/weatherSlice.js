import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  data: undefined,
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async ({ location, type }, thunkAPI) => {
    const response = await axios.post("https://weather-app-hcot.onrender.com/weather", {
      location,
      type: type,
    });
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.loading = true;
      state.data = undefined;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = true;
      state.data = undefined;
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
