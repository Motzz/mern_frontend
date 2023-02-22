import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import createBlog from "../CreateBlog/createBlog";
const mainApp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/create" element={<createBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <p>Header</p>
      <p>Content</p>
      <p>Footer</p>
    </div>
  );
};

export default mainApp;
