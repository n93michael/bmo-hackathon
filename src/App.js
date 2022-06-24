import "./App.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
    </Router>
  );
}

export default App;

// Router / Switches

// Header / Nav bar sits on top of the routes
