import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { fetchWeatherData } from "../../redux/feature/fetchWeather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import useCurrentLocation from "../../hooks/useCurrentLocation";

function RootLayout() {
  const { loading, data, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const { lat, long } = useCurrentLocation();
  console.log(`${long},${lat}`);
  useEffect(() => {
    loading &&
      lat !== undefined &&
      long !== undefined &&
      dispatch(fetchWeatherData(`${long},${lat}`));
  }, [loading, lat, long]);
  return (
    <div className={styles.mainWrapper}>
      <Navigation />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
