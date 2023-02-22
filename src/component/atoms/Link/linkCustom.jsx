import React from "react";
import "./link.scss";
const linkCustom = ({ title, onKlik }) => {
  return (
    <p className="link" onClick={() => onKlik()}>
      {title}
    </p>
  );
};

export default linkCustom;
