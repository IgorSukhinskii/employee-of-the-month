import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Organization from "./pages/organization";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/orgs/:org" component={Organization} />
    </div>
  </Router>
);

export default Routes;
