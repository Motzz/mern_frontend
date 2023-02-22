import React from "react";
import "./textArea.scss";
const TextArea = ({ ...propsKemuhngkinan }) => {
  return (
    <div>
      <textarea className="text-area" {...propsKemuhngkinan}></textarea>
    </div>
  );
};

export default TextArea;
