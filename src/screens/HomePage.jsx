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
      <div className="content-container">
        <div>
          <h5>Simply hit send</h5>
          <p>Sending and receiving money is just as easy as texting a friend.</p>
          <Button size="large" onPress={handleJoinNow}>Try it out</Button>
        </div>
        <div>
          <img className="img-ctn1" src="./images/send.png" alt="send" />
        </div>
      </div>
      <div className="content-container">
        <div>
          <img className="img-ctn2" src="./images/globe.png" alt="globe" />
        </div>
        <div>
          <h5>And send across the globe too</h5>
          <p>Whether it’s Morocco or Mexico, you can transfer there — really,
            really fast. Oh, and the rates are as good as you’ve heard.</p>
          <Button size="large" onPress={handleJoinNow}>See how to send it far</Button>
        </div>
      </div>
      <div className="content-container-last">
        <div>
          <img className="img-ctn1" src="./images/security.png" alt="security" />
        </div>
        <div>
          <h5>This is money security</h5>
          <p>Welcome to your money’s new home — protected round-the-clock by Revolut Secure’s proactive,
            purpose-built defences. This is what a new era of money security looks like.</p>
          <Button size="large" onPress={handleJoinNow}>Tell me more</Button>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default HomePage;
