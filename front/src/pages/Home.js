// Libraries
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth/context";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Form from "../components/containers/Home/Form";
import ListItems from "../components/containers/Home/ListItems";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "8rem" }}>
        <Form />
        <ListItems />
      </div>
    </div>
  );
};

export default Home;
