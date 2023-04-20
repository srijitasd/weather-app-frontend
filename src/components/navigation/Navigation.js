import React from "react";
import styles from "./style.module.scss";
import search from "../../assets/icons/search.svg";
import hamburger from "../../assets/icons/hamburger.svg";

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <img src={hamburger} alt="search" className={styles.hamburger} />
      <img src={search} alt="search" className={styles.searchIcon} />
    </nav>
  );
}

export default Navigation;
