import React from "react";
import Button from "./Button";

const NavBar = () => {
  const handleHomeButton = (e) => {
    console.log(`Clicked ${e.target.textContent} Button!`)
  }
  const handleLoginButton = (e) => {
    console.log(`Clicked ${e.target.textContent} Button!`)
  }
  const handleRegisterButton = (e) => {
    console.log(`Clicked ${e.target.textContent} Button!`)
  }
  const handleAboutButton = (e) => {
    console.log(`Clicked ${e.target.textContent} Button!`)
  }

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