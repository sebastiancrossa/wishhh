// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
