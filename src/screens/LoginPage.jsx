import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const handleLogin = (e) => {
  e.preventDefault();
  console.log("Logged In!");
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
            value={username}
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
          <p>not a member? <a href="">sign up</a></p>
        </form>
      </div>
    </>
  )
};


export default LoginPage;
