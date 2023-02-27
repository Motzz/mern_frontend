import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Button, CardBlog, Gap } from "../../component/tampunganComponent";
import "./home.scss";
import { setDataBlog } from "../../config/Redux/action/TampunganAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const Home = () => {
  const [counter, setCounter] = useState(1);
  // const [dataBlog, setDataBlog] = useState([]);
  // const { dataBlogs, name } = useSelector((state) => state); //nama itu dari state yang ada di redux
  const { dataBlogs, page } = useSelector((state) => state.HomeReducer); //nama itu dari state yang ada di redux
  const dispatch = useDispatch();
  // console.log(dataBlogs);
  console.log(dataBlogs);
  console.log(page);

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch({ type: "UPDATE_NAME" });
    // }, 3000);
    // axios
    //   .get("http://localhost:4000/v1/blog/indexPost")
    //   .then((result) => {
    //     const responseApi = result.data;

    //     // setDataBlog(responseApi.data);
    //     dispatch(setDataBlog(responseApi.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(setDataBlog(parseInt(counter)));
  }, [dispatch, counter]);
  const navigate = useNavigate();
  const previous = () => {
    setCounter(parseInt(counter <= 1 ? 1 : counter - 1));
    console.log(counter);
  };

  const next = () => {
    setCounter(parseInt(counter === page.totalPage ? page.totalPage : counter + 1));
    console.log(counter);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Apakah anda yakin?",
      message: "Data akan terhapus",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("Click Yes");
            // console.log(`http://localhost:4000/v1/blog/delete/${id}`);

            axios
              .delete(`http://localhost:4000/v1/blog/delete/${id}`)
              .then((res) => {
                console.log("sukses menghapus data", res.data);
                dispatch(setDataBlog(parseInt(counter)));
              })
              .catch((err) => {
                console.log("gagal hapus data", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };
  return (
    <div className="container-home">
      <div className="create-button">
        <Button title="Tambahkan Blog +" onClick={() => navigate("/create")} />
      </div>
      {/* <p>{name}</p> */}
      <Gap height={20} />
      <div className="containter-card-blog">
        {dataBlogs.map((blog) => {
          return <CardBlog key={blog._id} title={blog.title} image={`http://localhost:4000/${blog.image}`} body={blog.body} author={blog.author.name} date={blog.createdAt} idBlog={blog._id} onDelete={() => confirmDelete(blog._id)} />;
        })}
        {/* <CardBlog />
        <CardBlog />

        <CardBlog />

        <CardBlog /> */}
      </div>
      <div className="pagination">
        <Button title=" < Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage}/{page.totalPage}
        </p>
        <Gap width={20} />

        <Button title="Next > " onClick={next} />
      </div>
    </div>
  );
};

export default Home;
