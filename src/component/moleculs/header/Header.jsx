import React from "react";
import "./header.scss";
import linkCustom from "../../atoms/Link/linkCustom";
import { Link } from "../../tampunganComponent";
const Header = () => {
  return (
    <>
      <header className="container-header">
        <p className="logo">Mern-Blog</p>
        <Link className="logo" title="Log-out" />
      </header>
    </>
  );
};

export default Header;
