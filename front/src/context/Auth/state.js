// Libraries
import React, { useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import AuthContext from "./context";
import AuthReducer from "./reducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
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
  const loadUser = async () => {
    // Method that helps us automatically pass our token as a header, if one exists
    // Helps us not have to repititively pass the token each time we make a request to a private route
    if (localStorage.token) setAuthToken(localStorage.token);

    try {
      const res = await axios.get(`${backendUrl}/api/auth`);

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

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

      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Login user
  const loginUser = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`${backendUrl}/api/auth`, formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Logout user
  const logoutUser = () => {
    try {
      dispatch({
        type: LOGOUT
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loginUser,
        registerUser,
        logoutUser,
        loadUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
