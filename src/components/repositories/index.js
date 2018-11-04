import React from "react";
import Repositories from "./repositories";

const withRepositories = Component => {
  class ComponentWithRepositories extends React.Component {
    state = {
      repos: null
    };

    componentDidMount() {
      fetch("https://api.github.com/orgs/Vincit/repos")
        .then(response => response.json())
        .then(this.updateRepos);
    }

    updateRepos = repos => {
      this.setState({ repos });
    };

    render() {
      const { repos } = this.state;
      return repos === null ? (
        <div>no data sory</div>
      ) : (
        <Component repos={repos} />
      );
    }
  }

  return ComponentWithRepositories;
};

export default withRepositories(Repositories);
