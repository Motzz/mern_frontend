import React from "react";
import { registerBg } from "../../../assets/tampunganGambar";
import { Button, Gap } from "../../atoms/atoms";
import "./cardBlog.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CardBlog = ({ title, author, date, body, image, onDelete, idBlog }) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
    <div className="container-card">
      <img className="img-thumbnail" src={image} alt="gambarBlog" loading="lazy" />
      <div className="content">
        <p className="judul">{title}</p>
        <p className="author">
          {author} - {date}
        </p>
        <p className="desc">{body}</p>
        <Gap height={20} />
        <Button title="Detail" onClick={() => navigate(`/detail/${idBlog}`)} />
        <Button title="Edit" onClick={() => navigate(`/update/${idBlog}`)} />

        <Button title="Delete" onClick={(id) => onDelete(id)} />
      </div>
    </div>
  );
};

export default CardBlog;
