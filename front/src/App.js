// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItemState from "./context/listItem/ListItemState";

// Component Imports
import Home from "./pages/Home";

function App() {
  return (
    <ListItemState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </ListItemState>
  );
}

export default App;
