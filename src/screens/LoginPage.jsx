import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";
import { login } from "../apis/auth.apis";

const LoginPage = () => {
  const { setAccessToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleUserChange = (e) => setInputUsername(e.target.value);
  const handlePasswordChange = (e) => setInputPassword(e.target.value);

  const postLogin = async (username, password) => {
    try {
      const data = await login({
        username,
        password
      });
      setAccessToken(data.accessToken);
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    postLogin(inputUsername, inputPassword);
    setInputUsername("");
    setInputPassword("");
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
            value={inputPassword}
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
