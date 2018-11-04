import React from "react";
import styles from "./styles.module.css";
import Repositories from "../../components/repositories";
import Logo from "../../components/logo";

const Main = () => (
  <div className={styles.main}>
    <header className={styles.header}>
      <Logo />
    </header>
    <Repositories />
  </div>
);

export default Main;
