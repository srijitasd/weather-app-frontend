import React from "react";
import { useSelector } from "react-redux";
import LocDateComponent from "../components/locDate/LocDateComponent";
import TemperatureComponent from "../components/temperature/TemperatureComponent";
import CardlayoutFullComponent from "../layouts/cardLayouts/cardLayoutFull/CardlayoutFullComponent";

import windIcon from "../assets/icons/wind.svg";
import humidityIcon from "../assets/icons/humidity.svg";

function HomePage() {
  const { loading, data, error } = useSelector((state) => state.weather);
  console.log(data);

  return loading && data === undefined ? (
    <p>Loading...</p>
  ) : (
    <>
      <LocDateComponent location={data.location} timestamp={data.weather.date} />
      <TemperatureComponent
        forecast={data.weather.forecast}
        minMax={data.weather.minMax}
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
