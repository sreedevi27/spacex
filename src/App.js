import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header.js";
import Launch from "./Lanch/Launch.js";
import "./App.css";
import LaunchList from "./LaunchList/LaunchList";

function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div>
  );
}

export default App;
