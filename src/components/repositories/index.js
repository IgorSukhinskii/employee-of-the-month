import React from "react";
import Repositories from "./repositories";

const withRepositories = Component => {
  class ComponentWithRepositories extends React.Component {
    state = {
      repos: null
    };

    componentDidMount() {
      const { org } = this.props;

      fetch(
        `https://api.github.com/search/repositories?q=user:${org}&sort=stars&order=desc`
      )
        .then(response => response.json())
        .then(this.updateRepos);
    }

    updateRepos = data => {
      this.setState({ repos: data.items });
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
