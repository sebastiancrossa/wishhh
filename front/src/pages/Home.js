// Libraries
import React from "react";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Form from "../components/containers/Home/Form";
import ListItems from "../components/containers/Home/ListItems";

const Home = () => {
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
