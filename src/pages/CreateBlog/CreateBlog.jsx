import React, { useEffect, useState } from "react";
import { Input, Button, UploadImg, TextArea, Gap } from "../../component/tampunganComponent";
import "./createBlog.scss";
import { Link } from "../../component/tampunganComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { postToApi, setForm, setImgPreview, updateToApi } from "../../config/Redux/action/TampunganAction";
//pake redux
const CreateBlog = () => {
  const { form, imagePreview } = useSelector((state) => state.CreateBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();

  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let paramsIDBlog = params.idBlog;

  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    console.log("params", params.idBlog);
    if (paramsIDBlog) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:4000/v1/blog/indexPost/${paramsIDBlog}`)
        .then((res) => {
          console.log("res", res.data.data);
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));

          // setData(res.data.data);
        })
        .catch((err) => {});
    }
  }, [paramsIDBlog]);
  const onSubmit = () => {
    console.log(title);
    console.log(body);
    console.log(image);
    let paramsIDBlog = params.idBlog;

    if (isUpdate) {
      updateToApi(form, paramsIDBlog);
    } else {
      postToApi(form);
    }
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <>
      <div className="container-blog-post">
        <Link title="kembali" onKlik={() => navigate("/")} />
        <p className="title">{isUpdate ? "Update " : "Create New "}Blog Spot</p>
        <Input label="Judul Post" placeholder="ex: Biologi" type="text" value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
        <UploadImg onChange={(e) => onImageUpload(e)} srcImg={imagePreview} />
        <TextArea value={body} onChange={(e) => dispatch(setForm("body", e.target.value))} />
        <Gap height={20} />
        <div className="button-save">
          <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
// const CreateBlog = () => {

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState("");
//   const [imgPrev, setImgPrev] = useState(null);

//   const onSubmit = () => {
//     console.log(title);
//     console.log(body);
//     console.log(image);
//     const data = new FormData();
//     data.append("title", title);
//     data.append("body", body);
//     data.append("image", image);

//     axios
//       .post("http://localhost:4000/v1/blog/create", data, {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log("masukkan data sukses", res);
//       })
//       .catch((err) => {
//         console.log("masukkan data gagal", err);
//       });
//   };
//   const onImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setImgPrev(URL.createObjectURL(file));
//   };
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="container-blog-post">
//         <Link title="kembali" onKlik={() => navigate("/")} />
//         <p className="title">Create New Blog Spot</p>
//         <Input label="Judul Post" placeholder="ex: Biologi" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         <UploadImg onChange={(e) => onImageUpload(e)} srcImg={imgPrev} />
//         <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
//         <Gap height={20} />
//         <div className="button-save">
//           <Button title="Save" onClick={onSubmit} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateBlog;
