import React from "react";
import styles from "./styles.module.css";
import Logo from "../../components/logo";

const Home = () => (
  <div className={styles.home}>
    <header className={styles.header}>
      <Logo />
    </header>
  </div>
);

export default Home;
