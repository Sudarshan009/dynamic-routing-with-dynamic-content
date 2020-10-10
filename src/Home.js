import React from "react";
import PersonInfo from "./Components/PersonInfo.js";
import "./App.css";
import { render } from "react-dom";
import PersonData from "./data/PersonData.json";
import Nav from "./nav";
import banner from "./banner.jpg";
import Greeting from "./Greeting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

console.log();
function Home() {
  return (
    <div>
      <img src={banner} alt="Logo" width="100%" height="auto" />

      <PersonInfo />
    </div>
  );
}

export default Home;
