import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      // Adding the received token to localStorage
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
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

    default:
      return state;
  }
};

export default AuthReducer;
