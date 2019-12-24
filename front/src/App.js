// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WishListState from "./context/WishList/state";

// Component Imports
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <WishListState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </WishListState>
  );
}

export default App;
