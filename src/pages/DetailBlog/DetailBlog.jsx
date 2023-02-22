import React from "react";
import { registerBg } from "../../assets/tampunganGambar";
import "./detailBlog.scss";

const DetailBlog = () => {
  return (
    <>
      <div className="container-detail">
        <img className="gambar-detail" src={registerBg} alt="" />

        <p className="judul-detail">Judul Blog</p>
        <p className="author-detail">Author - Date Post</p>
        <p className="deskripsi-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda dicta eligendi, suscipit mollitia praesentium. Obcaecati debitis dignissimos, eum nesciunt vero quo magnam minus est, adipisci rem ea optio laudantium?
        </p>
      </div>
    </>
  );
};

export default DetailBlog;
