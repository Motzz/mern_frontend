import React from "react";
import { registerBg } from "../../../assets/tampunganGambar";
import "./cardBlog.scss";
const CardBlog = () => {
  return (
    <div className="container-card">
      <img className="img-thumbnail" src={registerBg} alt="gambarBlog" loading="lazy" />
      <div className="content">
        <p className="judul">Judul</p>
        <p className="author">Author - Date post</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto vitae placeat illo hic cupiditate! Fugiat, vel facilis. Provident ullam adipisci unde incidunt ea tempore reiciendis quis saepe, eius at.</p>
      </div>
    </div>
  );
};

export default CardBlog;
