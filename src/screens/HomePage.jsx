import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="img-container">
          <img alt="Bank" className="img" src="./images/bank.jpg" />
        </div>
        <h1>Home Of The Banking</h1>
        <h5>Welcome to Bankera, the one true banking system for all your needs.
          Our members enjoy alot of features and provisions.
          So what are you waiting for? Join Now!
        </h5>
      </div>
      <Footer />
    </>
  )
};

export default HomePage;
