import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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

  return (
    <div className="nav-bar">
      <h1>Bankera</h1>
      <div className="btn-div">
        <Button onPress={handleHomeButton} size="large" color="white">
          Home
        </Button>
        <Button onPress={handleLoginButton} size="large" color="white">
          Login
        </Button>
        <Button onPress={handleRegisterButton} size="large" color="white">
          Register
        </Button>
        <Button onPress={handleAboutButton} size="large" color="white">
          About
        </Button>
      </div>
    </div>
  )
};

export default NavBar;