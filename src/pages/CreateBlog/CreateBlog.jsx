import React from "react";
import { Input, Button, UploadImg, TextArea, Gap } from "../../component/tampunganComponent";
import "./createBlog.scss";
import { Link } from "../../component/tampunganComponent";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-blog-post">
        <Link title="kembali" onKlik={() => navigate("/")} />
        <p className="title">Create New Blog Spot</p>
        <Input label="Judul Post" placeholder="ex: Biologi" type="text" />
        <UploadImg />
        <TextArea />
        <Gap height={20} />
        <div className="button-save">
          <Button title="Save" />
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
