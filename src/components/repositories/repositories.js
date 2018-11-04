import React from "react";

const Repositories = ({ repos }) => (
  <div>
    {repos.map(repo => (
      <div key={repo.id}>{repo.name}</div>
    ))}
  </div>
);

export default Repositories;
