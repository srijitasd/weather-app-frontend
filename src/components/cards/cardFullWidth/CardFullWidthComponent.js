import React from "react";
import styles from "./style.module.scss";

function CardFullWidthComponent({ icon, title, data }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconCont}>
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </div>
      <p>
        <strong>{data}</strong>
      </p>
    </div>
  );
}

export default CardFullWidthComponent;
