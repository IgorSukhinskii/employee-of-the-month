import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Main} />
  </Router>
);

export default Routes;
