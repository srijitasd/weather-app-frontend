import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { fetchWeatherData } from "../../redux/feature/fetchWeather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import useCurrentLocation from "../../features/Homepage/hooks/useCurrentLocation";

function RootLayout() {
  const { loading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const { lat, long } = useCurrentLocation();
  useEffect(() => {
    loading &&
      lat !== null &&
      long !== null &&
      dispatch(fetchWeatherData({ location: `${lat},${long}` }));
  }, [loading, lat, long, dispatch]);
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
