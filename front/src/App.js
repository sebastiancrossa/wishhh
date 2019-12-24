// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthState from "./context/Auth/state";
import WishListState from "./context/WishList/state";
import AlertState from "./context/Alert/state";

// Component Imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <AuthState>
      <AlertState>
        <WishListState>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <Route component={() => <h1>404</h1>} />
            </Switch>
          </BrowserRouter>
        </WishListState>
      </AlertState>
    </AuthState>
  );
}

export default App;
