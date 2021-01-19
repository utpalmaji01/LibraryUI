import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./components/Dashboard.jsx";
import history from "./History.js";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashBoard" component={DashBoard} />
          </Route>
          <Route exact path="/dashBoard" component={DashBoard} />
        </Switch>
      </Router>
    );
  }
}
