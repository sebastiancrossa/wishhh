// Libraries
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth/context";
import { ToastContainer, toast } from "react-toastify";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Form from "../components/containers/Login/Form";

const Login = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, error } = authContext;

  useEffect(() => {
    loadUser();

    if (error) toast.error(`${error}`);

    if (isAuthenticated) {
      history.push("/");
    }
  }, [error, isAuthenticated, history]);

  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "8rem" }}>
        <Form />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
