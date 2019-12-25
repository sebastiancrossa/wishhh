// Libraries
import React, { useReducer } from "react";
import axios from "axios";
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

const { backendUrl } = require("../../utils/config/configVariables");

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load user

  // Register user
  const registerUser = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`${backendUrl}/api/users`, formData, config);

      // We are passing the token from the user created to the payload, which is received if there are no errors after calling our api
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

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
