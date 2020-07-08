import React from "react";

import Header from "./components/Header/Header.js";

import "./App.css";
import LaunchList from "./LaunchList/LaunchList";
import LaunchView from "./LaunchView/LaunchView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/launch/:flight_number" component={LaunchView} />
          <Route path="/" component={LaunchList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
