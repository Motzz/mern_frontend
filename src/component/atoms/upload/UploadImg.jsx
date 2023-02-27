import React from "react";
import "./upload.scss";
import { loginBg } from "../../../assets/tampunganGambar";
const UploadImg = ({ srcImg, ...sisanya }) => {
  return (
    <div className="upload">
      <label htmlFor="">Pilih poster Blog</label>
      <br />
      {/* kalo img nya ada kasik img itu, kalo ga ada ya kosongin */}
      {srcImg && <img className="img-preview" src={srcImg} alt="" />}
      <input type="file" {...sisanya} />
    </div>
  );
};

export default UploadImg;
