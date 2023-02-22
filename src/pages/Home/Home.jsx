import React from "react";
import { Button, CardBlog, Gap } from "../../component/tampunganComponent";
import "./home.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <div className="create-button">
        <Button title="Tambahkan Blog +" onClick={() => navigate("/create")} />
      </div>
      <Gap height={20} />
      <div className="containter-card-blog">
        <CardBlog />
        <CardBlog />

        <CardBlog />

        <CardBlog />
      </div>
      <div className="pagination">
        <Button title=" < Previous" />
        <Gap width={20} />

        <Button title="Next > " />
      </div>
    </div>
  );
};

export default Home;
