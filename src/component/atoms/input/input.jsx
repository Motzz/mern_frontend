import React from "react";
import "./input.scss";
const Input = ({ label, ...sisanya }) => {
  return (
    <>
      <div className="container-input">
        <label className="label-input">{label}</label>
        <input type="text" {...sisanya} className="input-text" />
      </div>
    </>
  );
};

export default Input;
