import React from "react";
import styles from "./style.module.scss";

function LocationComponent({ location }) {
  return <h1 className={styles.location}>{location}</h1>;
}

export default LocationComponent;
