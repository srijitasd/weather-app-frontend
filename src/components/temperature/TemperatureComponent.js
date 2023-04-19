import React from "react";
import icon from "../../assets/icons/rain.svg";
import styles from "./style.module.scss";

function TemperatureComponent({ forecast, temp, feelsLike }) {
  // const fetchIcon = (forecast) => {
  //     if ( forecast === "Rainy") {
  //         return
  //     }
  // }
  return (
    <div className={styles.forecastCont}>
      <img src={icon} alt="Rain" />
      <div className={styles.dataCont}>
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
    </div>
  );
}

export default TemperatureComponent;
