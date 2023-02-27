import React, { useEffect, useState } from "react";
import { registerBg } from "../../assets/tampunganGambar";
import { Button, Gap } from "../../component/atoms/atoms";
import "./detailBlog.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailBlog = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let paramsIDBlog = params.idBlog;

  const [data, setData] = useState({});
  useEffect(() => {
    console.log("params", params.idBlog);
    axios
      .get(`http://localhost:4000/v1/blog/indexPost/${paramsIDBlog}`)
      .then((res) => {
        console.log("res", res);
        setData(res.data.data);
      })
      .catch((err) => {});
  }, [params]);

  if (data.title) {
    return (
      <>
        <div className="container-detail">
          <img className="gambar-detail" src={`http://localhost:4000/${data.image}`} alt="" />

          <p className="judul-detail">{data.title}</p>
          <p className="author-detail">
            {data.author.name} - {data.createdAt}
          </p>
          <p className="deskripsi-detail">{data.body}</p>
        </div>
      </>
    );
  }
  return <p>Loading...</p>;
};

export default DetailBlog;
