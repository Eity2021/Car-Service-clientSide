import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">logo</Link>
      </div>
      <div>

        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="service">Service</Link>
      </div>
    </div>
  );
};

export default Header;
