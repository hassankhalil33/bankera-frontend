import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { logout } from "../apis/auth.apis";

const NavBar = () => {
  const { accessToken, setAccessToken, setUser } = useContext(UserContext);
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
  const handleLogoutButton = async () => {
    await logout();
    setAccessToken("");
    setUser({});
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <h1>Bankera</h1>
      <div className="btn-div">
        <Button onPress={handleHomeButton} size="large">
          Home
        </Button>
        {
          accessToken ?
            <>
              < Button onPress={handleAccountButton} size="large">
                Account
              </Button>
              <Button onPress={handleAboutButton} size="large">
                About
              </Button>
              <Button onPress={handleLogoutButton} size="large" color="red">
                Logout
              </Button>
            </>
            :
            <>
              <Button onPress={handleLoginButton} size="large">
                Login
              </Button>
              <Button onPress={handleRegisterButton} size="large">
                Register
              </Button>
              <Button onPress={handleAboutButton} size="large">
                About
              </Button>
            </>
        }
      </div>
    </div >
  )
};

export default NavBar;