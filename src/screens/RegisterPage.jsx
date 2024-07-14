import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { register } from "../apis/auth.apis";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setName("");
    setEmail("");

    try {
      const data = await register({ username, password, email });
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
      <Footer />
    </>
  )
};


export default LoginPage;
