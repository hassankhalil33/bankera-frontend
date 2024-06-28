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
        <Button onPress={handleHomeButton} size="large" color="white">
          Home
        </Button>
        {
          isAuth ?
            <>
              < Button onPress={handleAccountButton} size="large" color="white">
                Account
              </Button>
              <Button onPress={handleAboutButton} size="large" color="white">
                About
              </Button>
              <Button onPress={handleLogoutButton} size="large" color="white">
                Logout
              </Button>
            </>
            :
            <>
              <Button onPress={handleLoginButton} size="large" color="white">
                Login
              </Button>
              <Button onPress={handleRegisterButton} size="large" color="white">
                Register
              </Button>
              <Button onPress={handleAboutButton} size="large" color="white">
                About
              </Button>
            </>
        }
      </div>
    </div >
  )
};

export default NavBar;