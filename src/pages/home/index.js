import React from "react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import styles from "./styles.module.css";
import Logo from "../../components/logo";
import Search from "../../components/search";

const Home = () => (
  <div className={styles.home}>
    <Helmet>
      <title>EOTM</title>
      <link rel="canonical" href="https://eotm.igors.space/" />
      <body className={styles.body} />
    </Helmet>
    <header className={styles.header}>
      <Logo />
    </header>
    <Typography variant="h1" gutterBottom>
      Employee of the Month
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      A Github organization contributions visualizer. It works entirely in the
      browser, and is powered by React.
    </Typography>
    <Search />
  </div>
);

export default Home;
