import React from "react";
import "./button.scss";
const Button = ({ title, ...sisanya }) => {
  return (
    <>
      <button className="button" {...sisanya}>
        {title}
      </button>
    </>
  );
};

export default Button;
