import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/feature/fetchWeather/weatherSlice";
import LocDateComponent from "../components/locDate/LocDateComponent";
import TemperatureComponent from "../components/temperature/TemperatureComponent";
import CardlayoutFullComponent from "../layouts/cardLayouts/cardLayoutFull/CardlayoutFullComponent";

import windIcon from "../assets/icons/wind.svg";
import humidityIcon from "../assets/icons/humidity.svg";

function HomePage() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);
  console.log(data);
  useEffect(() => {
    loading && dispatch(fetchWeatherData("Kolkata"));
  }, [loading]);

  return loading && data === undefined ? (
    <p>Loading...</p>
  ) : (
    <>
      <LocDateComponent location={data.location} timestamp={data.weather.date} />
      <TemperatureComponent
        forecast={data.weather.forecast}
        temp={data.weather.temperature}
        feelsLike={data.weather.feelsLike}
      />
      <CardlayoutFullComponent
        data={[
          {
            icon: windIcon,
            title: "Wind",
            data: `${data.weather.wind}km/hr`,
          },
          {
            icon: humidityIcon,
            title: "Humidity",
            data: `${data.weather.humidity}%`,
          },
        ]}
      />
    </>
  );
}

export default HomePage;
