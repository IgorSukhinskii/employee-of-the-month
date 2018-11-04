import React from "react";
import styles from "./styles.module.css";
import Logo from "../../components/logo";

const Main = () => (
  <div className={styles.main}>
    <header className={styles.header}>
      <Logo />
    </header>
  </div>
);

export default Main;
