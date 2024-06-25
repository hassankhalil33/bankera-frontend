import React from "react";

const Input = ({ placeholder, type = "text", handleChange, value }) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  )
};


export default Input;
