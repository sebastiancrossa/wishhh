// Libraries
import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/Auth/context";

// Styles
import { CustomNavbar } from "./navbar.style";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  return (
    <CustomNavbar>
      <h1>Wishhh</h1>
      <p>{authContext.user ? authContext.user.name : ""}</p>
    </CustomNavbar>
  );
};

export default Navbar;
