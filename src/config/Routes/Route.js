import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Login, Register, MainApp } from "../../pages/tampunganPage";
const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routess;

//rafce cheetsheet untuk es7 extention installan
