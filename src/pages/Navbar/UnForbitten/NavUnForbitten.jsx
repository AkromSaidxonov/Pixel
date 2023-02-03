import React from "react";
import logo from "../../../assets/img/logo/pixel.png";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container ">
        <div className="navbar__items">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
            <Link to="/">Pixel</Link>
          </div>
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
