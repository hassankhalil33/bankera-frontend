import React from "react";
import "../App.css";

const Button = ({ children, color = "blue", size = "small", onPress }) => {
  return (
    <button
      className={`btn ${color} btn-${size}`}
      onClick={onPress}
    >
      {children}
    </button>
  )
};


export default Button;
