import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Repositories } from "./components/repositories/Repositories";
import { Developers } from "./components/developers/Developers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/trending">
            <Repositories />
          </Route>
          <Route exact path="/trending/developers">
            <Developers />
          </Route>
          <Route exact path="/">
            <Repositories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
