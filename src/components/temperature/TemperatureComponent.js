import React from "react";
import icon from "../../assets/icons/rain.svg";
import styles from "./style.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TemperatureComponent({ forecast, minMax, temp, feelsLike }) {
  // const fetchIcon = (forecast) => {
  //     if ( forecast === "Rainy") {
  //         return
  //     }
  // }
  return (
    <div className={styles.forecastCont}>
      <div className={styles.dataCont}>
        {minMax.max === null ? (
          <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
            {" "}
            <Skeleton className={styles.offsetTop} height={10} />{" "}
          </SkeletonTheme>
        ) : (
          <p className={styles.minMax}>
            Day {minMax.max} <sup>&deg;</sup>
            <span>&#x2022;</span> Night {minMax.min} <sup>&deg;</sup>
          </p>
        )}

        {temp === null ? (
          <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
            {" "}
            <Skeleton className={styles.offsetTop} height={45} />{" "}
          </SkeletonTheme>
        ) : (
          <p className={styles.temp}>
            {Math.round(temp)} <span>&deg;C</span>
          </p>
        )}

        {forecast === null ? (
          <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
            {" "}
            <Skeleton className={styles.offsetTop} height={10} />{" "}
          </SkeletonTheme>
        ) : (
          <p className={styles.forecast}>{forecast}</p>
        )}

        {feelsLike === null ? (
          <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
            {" "}
            <Skeleton className={styles.offsetTop} height={10} />{" "}
          </SkeletonTheme>
        ) : (
          <span className={styles.feelsLike}>
            Feels like{" "}
            <strong>
              {feelsLike} <span>&deg;C</span>
            </strong>
          </span>
        )}
      </div>
      <img src={icon} alt="Rain" />
    </div>
  );
}

export default TemperatureComponent;
