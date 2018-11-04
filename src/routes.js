import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Organization from "./pages/organization";

const Routes = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/orgs/:org" component={Organization} />
    </>
  </Router>
);

export default Routes;
