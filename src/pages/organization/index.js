import React from "react";
import Repositories from "../../components/repositories";

const Organization = ({ match }) => (
  <div>
    <header>{match.params.org}</header>
    <Repositories org={match.params.org} />
  </div>
);

export default Organization;
