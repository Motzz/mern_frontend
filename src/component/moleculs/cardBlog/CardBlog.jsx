import React from "react";
import { registerBg } from "../../../assets/tampunganGambar";
import "./cardBlog.scss";
const CardBlog = ({ title, author, date, body, image }) => {
  return (
    <div className="container-card">
      <img className="img-thumbnail" src={image} alt="gambarBlog" loading="lazy" />
      <div className="content">
        <p className="judul">{title}</p>
        <p className="author">
          {author} - {date}
        </p>
        <p className="desc">{body}</p>
      </div>
    </div>
  );
};

export default CardBlog;
