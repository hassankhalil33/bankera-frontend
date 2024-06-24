import React from "react";
import Input from "../components/Input";

const LoginPage = () => {
  return (
    <div className="input-group mb-3">
      <label htmlFor="">Login</label>
      <Input placeholder={"username"} />
      <Input placeholder={"password"} />
      <Input placeholder={"email"} />
    </div>
  )
};


export default LoginPage;
