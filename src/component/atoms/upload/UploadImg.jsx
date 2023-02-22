import React from "react";
import "./upload.scss";
import { loginBg } from "../../../assets/tampunganGambar";
const UploadImg = () => {
  return (
    <div className="upload">
      <label htmlFor="">Pilih poster Blog</label>
      <br />
      <img className="img-preview" src={loginBg} alt="" />
      <input type="file" name="" id="" />
    </div>
  );
};

export default UploadImg;
