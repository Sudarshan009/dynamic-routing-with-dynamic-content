import React from "react";
import "./App.css";
import Nav from "./nav";
import Greeting from "./Greeting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

console.log();
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/greeting" exact component={Greeting} />
          <Route path="/" exact component={Home} />
           <Route
        path="/greeting/:id"
        render={(props) => <Greeting  {...props} />}
      />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
