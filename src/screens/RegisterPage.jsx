import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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
      <h1>Bankera</h1>
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
        <p>already a member? <a href="">sign in</a></p>
      </form>
    </>
  )
};


export default LoginPage;
