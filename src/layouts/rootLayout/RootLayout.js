import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { fetchWeatherData } from "../../redux/feature/fetchWeather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import useCurrentLocation from "../../features/Homepage/hooks/useCurrentLocation";

function RootLayout() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const { loading, data } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const { lat, long } = useCurrentLocation();

  const backgroundMap = {
    Clouds: "linear-gradient(119.54deg, #e5e5e5 23.22%, #818181 99.52%)",
    Smoke: "linear-gradient(119.54deg, #ebeaea 23.22%, #bbbfa2 99.52%)",
    Clear: "linear-gradient(119.54deg, #FEE3BC 23.22%, #F39876 99.52%)",
    Rain: "linear-gradient(119.54deg, #bfdeff 23.22%, #80adff 99.52%)",
    Snow: "linear-gradient(119.54deg, #ffffff 23.22%, #c7c7c7 99.52%)",
    Haze: "linear-gradient(119.54deg, rgb(226 245 212) 23.22%, rgb(177 198 207) 99.52%)",
  };
  useEffect(() => {
    loading &&
      lat !== null &&
      long !== null &&
      dispatch(fetchWeatherData({ location: `${lat},${long}` }));
    data && setBackgroundColor(backgroundMap[data.weather.forecast]);
  }, [loading, lat, long, dispatch, backgroundColor]);
  return (
    <div className={styles.mainWrapper} style={{ background: backgroundColor }}>
      <Navigation />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
