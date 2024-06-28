import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <ul>
            <li className="footer-li">
              <Link className="footer-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className="footer-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="footer-li">Legal</li>
            <li className="footer-li">Contact Us</li>
          </ul>
          <p>©<span id="logo-footer">Bankera</span> all rights reserved 2024</p>
        </div>
        <div className="footer-div2">
          <img className="img-footer" src="./images/linkedin.png" alt="linkedin" />
          <img className="img-footer" src="./images/instagram.png" alt="instagram" />
          <img className="img-footer" src="./images/facebook.png" alt="facebook" />
        </div>
      </div>
    </>
  )
};

export default Footer;
