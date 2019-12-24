// Libraries
import React, { useReducer } from "react";
import AuthContext from "./context";
import AuthReducer from "./reducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load user
  // Register user
  // Login user
  // Logout user
  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
