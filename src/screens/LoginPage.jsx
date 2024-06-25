import React, { useState } from "react";
import Input from "../components/Input";

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
    <form action="">
      <h3>Login</h3>
      <Input
        value={username}
        handleChange={handleUserChange}
        placeholder={"username"}
      />
      <Input
        value={password}
        handleChange={handlePasswordChange}
        placeholder={"username"}
        type="password"
      />
    </form>
  )
};


export default LoginPage;
