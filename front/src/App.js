// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthState from "./context/Auth/state";
import WishListState from "./context/WishList/state";
import AlertState from "./context/Alert/state";

import setAuthToken from "./utils/setAuthToken";

import { toast } from "react-toastify";

// Component Imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Alerts from "./components/layout/Navbar";

toast.configure();

if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  return (
    <AuthState>
      <AlertState>
        <WishListState>
          <BrowserRouter>
            <Alerts />
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
