// Libraries
import React from "react";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Form from "../components/containers/Login/Form";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "8rem" }}>
        <Form />
      </div>
    </div>
  );
};

export default Login;
