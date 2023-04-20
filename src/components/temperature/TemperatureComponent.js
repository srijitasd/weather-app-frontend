import React from "react";
import icon from "../../assets/icons/rain.svg";
import styles from "./style.module.scss";

function TemperatureComponent({ forecast, minMax, temp, feelsLike }) {
  // const fetchIcon = (forecast) => {
  //     if ( forecast === "Rainy") {
  //         return
  //     }
  // }
  return (
    <div className={styles.forecastCont}>
      <div className={styles.dataCont}>
        <p className={styles.minMax}>
          Day {minMax.max} <sup>&deg;</sup>
          <span>&#x2022;</span> Night {minMax.min} <sup>&deg;</sup>
        </p>
        <p className={styles.temp}>
          {Math.round(temp)} <span>&deg;C</span>
        </p>
        <p className={styles.forecast}>{forecast}</p>
        <span className={styles.feelsLike}>
          Feels like{" "}
          <strong>
            {feelsLike} <span>&deg;C</span>
          </strong>
        </span>
      </div>
      <img src={icon} alt="Rain" />
    </div>
  );
}

export default TemperatureComponent;
