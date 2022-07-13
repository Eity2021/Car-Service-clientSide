import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header_area">
      <div className="header_logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header_link">

        <Link className="link" to="/">Home</Link>
        <Link className="link" to="about">About</Link>
        <Link className="link" to="service">Service</Link>
        <Link className="link" to="login">Login</Link>
        
      </div>
    </div>
  );
};

export default Header;
