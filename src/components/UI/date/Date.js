import React from "react";
import styles from "./style.module.scss";

function DateComponent({ date }) {
  return <span className={styles.date}>{date}</span>;
}

export default DateComponent;
