import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      // Removing any token in localStorage if registration failed
      localStorage.removeItem("token");

      // Reseting all of our values
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      // Adding the received token to localStorage
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };

    case LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default AuthReducer;
