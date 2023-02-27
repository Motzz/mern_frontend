import React, { useState } from "react";
import { Input, Button, UploadImg, TextArea, Gap } from "../../component/tampunganComponent";
import "./createBlog.scss";
import { Link } from "../../component/tampunganComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imgPrev, setImgPrev] = useState(null);

  const onSubmit = () => {
    console.log(title);
    console.log(body);
    console.log(image);
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    axios
      .post("http://localhost:4000/v1/blog/create", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("masukkan data sukses", res);
      })
      .catch((err) => {
        console.log("masukkan data gagal", err);
      });
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImgPrev(URL.createObjectURL(file));
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container-blog-post">
        <Link title="kembali" onKlik={() => navigate("/")} />
        <p className="title">Create New Blog Spot</p>
        <Input label="Judul Post" placeholder="ex: Biologi" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <UploadImg onChange={(e) => onImageUpload(e)} srcImg={imgPrev} />
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
        <Gap height={20} />
        <div className="button-save">
          <Button title="Save" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
