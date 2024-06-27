import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const handleRegister = (e) => {
  e.preventDefault();
  console.log("Registered!");
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <form className="register-form">
          <div>
            <h3>Register</h3>
          </div>

          <Input
            value={username}
            handleChange={handleUserChange}
            placeholder={"Username"}
          />
          <Input
            value={name}
            handleChange={handleNameChange}
            placeholder={"Name"}
          />
          <Input
            value={password}
            handleChange={handlePasswordChange}
            placeholder={"Password"}
            type="password"
          />
          <Input
            value={email}
            handleChange={handleEmailChange}
            placeholder={"Email"}
            type="email"
          />
          <Button onPress={handleRegister}>
            Register
          </Button>
          <p>already a member? <Link to={"/login"}>sign in</Link></p>
        </form>
      </div>
    </>
  )
};


export default LoginPage;
