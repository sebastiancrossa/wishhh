// Librares
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth/context";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Form from "../components/containers/Register/Form";

const Register = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "8rem" }}>
        <Form />
      </div>
    </div>
  );
};

export default Register;
