import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

function RootLayout() {
  return (
    <div className={styles.mainWrapper}>
      <Navigation />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
