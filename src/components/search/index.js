import React from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";

export class Search extends React.Component {
  state = {
    searchQuery: ""
  };

  setSearchQuery = event => {
    this.setState({ searchQuery: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.history.push(`/orgs/${this.state.searchQuery}`);
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form className={styles.search} onSubmit={this.submitForm}>
        <TextField
          label="Search for organizations"
          placeholder="Github"
          fullWidth
          margin="none"
          variant="outlined"
          value={searchQuery}
          onChange={this.setSearchQuery}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default withRouter(Search);
