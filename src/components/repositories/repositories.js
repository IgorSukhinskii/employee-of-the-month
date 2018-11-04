import React from "react";

const Repositories = ({ repos }) => (
  <div>
    {repos.map(repo => (
      <div>{repo.name}</div>
    ))}
  </div>
);

export default Repositories;
