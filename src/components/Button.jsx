import React from "react";
import "../App.css";

const Button = ({ children, color = "blue", onPress }) => {
  return (
    <button
      className={"btn " + color}
      onClick={onPress}
    >
      {children}
    </button>
  )
};


export default Button;
