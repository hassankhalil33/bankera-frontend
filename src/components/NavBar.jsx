import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/");
  };
  const handleLoginButton = () => {
    navigate("/login");
  };
  const handleRegisterButton = () => {
    navigate("/register");
  };
  const handleAboutButton = () => {
    navigate("/about");
  };
  const handleAccountButton = () => {
    navigate("/profile");
  };
  const handleLogoutButton = () => {
    setIsAuth(false);
  };

  return (
    <div className="nav-bar">
      <h1>Bankera</h1>
      <div className="btn-div">
        <Button onPress={handleHomeButton} size="large" color="navbar">
          Home
        </Button>
        {
          isAuth ?
            <>
              < Button onPress={handleAccountButton} size="large" color="navbar">
                Account
              </Button>
              <Button onPress={handleAboutButton} size="large" color="navbar">
                About
              </Button>
              <Button onPress={handleLogoutButton} size="large" color="red">
                Logout
              </Button>
            </>
            :
            <>
              <Button onPress={handleLoginButton} size="large" color="navbar">
                Login
              </Button>
              <Button onPress={handleRegisterButton} size="large" color="navbar">
                Register
              </Button>
              <Button onPress={handleAboutButton} size="large" color="navbar">
                About
              </Button>
            </>
        }
      </div>
    </div >
  )
};

export default NavBar;