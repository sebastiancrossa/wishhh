// Libraries
import React, { useContext } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import AuthContext from "../../context/Auth/context";

const ProtectedRoute = ({ history, component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        authContext.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
