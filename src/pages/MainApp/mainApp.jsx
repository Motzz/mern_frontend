import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header, Footer } from "../../component/tampunganComponent";
import CreateBlog from "../CreateBlog/CreateBlog";
import DetailBlog from "../DetailBlog/DetailBlog";
import Home from "../Home/Home";

import "./mainapp.scss";
const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <header className="header-wrapper">
        <Header />
      </header>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/detail" element={<DetailBlog />} />
        </Routes>
      </div>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </div>
  );
};

export default MainApp;
