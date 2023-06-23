import React from "react";
import styles from "./style.module.scss";

function CardPillComponent({ icon, temperature, time }) {
  return (
    <div className={styles.card}>
      <p>{time}</p>
      <div className={styles.iconCont}>
        <img src={icon} alt="icon" />
        {/* <p>{title}</p> */}
      </div>
      <p>
        <strong>{temperature}</strong>
      </p>
    </div>
  );
}

export default CardPillComponent;
