// Libraries
import React, { useContext } from "react";
import AuthContext from "../../../context/Auth/context";

// Styles
import { CustomNavbar, LogoutButton } from "./navbar.style";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, logoutUser } = authContext;

  const handleSignOut = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <CustomNavbar>
      <h1>Wishhh</h1>

      <div style={{ display: "flex" }}>
        {user && (
          <>
            <p>{user.name}</p>
            <LogoutButton onClick={() => handleSignOut()}>
              Sign Out
            </LogoutButton>
          </>
        )}
      </div>
    </CustomNavbar>
  );
};

export default Navbar;
