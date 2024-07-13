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
          <h1 id="h1-hero">HOME OF THE BANKING</h1>
          <h5 id="h5-hero">Welcome to Bankera, the one true banking system for all your needs.
            Our members enjoy alot of features and provisions. So what are you waiting for?
          </h5>
          <div id="btn-index-1">
            <Button size="large" onPress={handleJoinNow}>Join Now!</Button>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div>
          <h3 className="h3-content">SIMPLY HIT SEND</h3>
          <p className="p-content">Sending and receiving money is just as easy as texting a friend.</p>
          <Button size="large" onPress={handleJoinNow}>Try it out</Button>
        </div>
        <div className="img-align">
          <img className="img-ctn1" src="./images/send.png" alt="send" />
        </div>
      </div>
      <div className="content-container">
        <div className="img-align">
          <img className="img-ctn2" src="./images/globe.png" alt="globe" />
        </div>
        <div>
          <h3 className="h3-content">AND SEND ACROSS THE GLOBE TOO</h3>
          <p className="p-content">Whether it’s Morocco or Mexico, you can transfer there — really,
            really fast. Oh, and the rates are as good as you’ve heard.</p>
          <Button size="large" onPress={handleJoinNow}>See how to send it far</Button>
        </div>
      </div>
      <div className="content-container-last">
        <div>
          <h3 className="h3-content">THIS IS MONEY SECURITY</h3>
          <p className="p-content" id="p-smaller">Welcome to your money’s new home — protected
            round-the-clock by Bankera Secure’s proactive,
            purpose-built defences. This is what a new era of money security looks like.</p>
          <Button size="large" onPress={handleJoinNow}>Tell me more</Button>
        </div>
        <div className="img-align">
          <img className="img-ctn3" src="./images/security.png" alt="security" />
        </div>
      </div>
      <Footer />
    </>
  )
};

export default HomePage;
