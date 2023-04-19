import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./feature/fetchWeather/weatherSlice";

export const store = configureStore({ reducer: { weather: weatherSlice } });
