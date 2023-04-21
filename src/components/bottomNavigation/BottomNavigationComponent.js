import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

function BottomNavigationComponent() {
  return (
    <div className={styles.navCont}>
      <div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inActive
          }
        >
          Today
        </NavLink>
        <NavLink
          to="/tomorrow"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inActive
          }
        >
          Tomorrow
        </NavLink>
      </div>
      <NavLink
        to="/week"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : styles.inActive
        }
      >
        Next 7 Days
      </NavLink>
    </div>
  );
}

export default BottomNavigationComponent;
