import React from "react";
import Helmet from "react-helmet";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles.module.css";
import Logo from "../../components/logo";

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
    <div className={styles.search}>
      <TextField
        label="Search for organizations"
        placeholder="Github"
        fullWidth
        margin="none"
        variant="outlined"
      />
      <Button variant="contained" color="primary" size="large">
        Search
      </Button>
    </div>
  </div>
);

export default Home;
