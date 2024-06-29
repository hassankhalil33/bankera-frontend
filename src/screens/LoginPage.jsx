import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  const { setJWT, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => setInputUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
    setInputUsername("");
    setPassword("");
    setTimeout(() => {
      navigate("/profile");
      setJWT("logged.in");
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <form className="login-form">
          <div>
            <h3>Login</h3>
          </div>

          <Input
            value={inputUsername}
            handleChange={handleUserChange}
            placeholder={"Username"}
          />
          <Input
            value={password}
            handleChange={handlePasswordChange}
            placeholder={"Password"}
            type="password"
          />
          <Button onPress={handleLogin}>
            Sign In
          </Button>
          <p>not a member? <Link to={"/register"}>sign up</Link></p>
        </form>
      </div>
      <Footer />
    </>
  )
};


export default LoginPage;
