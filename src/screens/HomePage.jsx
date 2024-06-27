import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => navigate("/register");

  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="img-container">
          <img alt="Bank" className="img" src="./images/bank.jpg" />
          <h1 id="h1-hero">Home Of The Banking</h1>
          <h5 id="h5-hero">Welcome to Bankera, the one true banking system for all your needs.
            Our members enjoy alot of features and provisions. So what are you waiting for?
          </h5>
          <div id="btn-index-1">
            <Button size="large" onPress={handleJoinNow}>Join Now!</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default HomePage;
