import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
  
      <div className="header_area">
        <div onClick={() => setOpen(!open)}>
          <FontAwesomeIcon className="fabars" icon={faBars}></FontAwesomeIcon>
        </div>
        <div className="header_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="color">
          <div className={`header_link ${open ? "up" : "down"}`}>
            <div className="header-linkup">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="about">
                About
              </Link>
              <Link className="link" to="service">
                Service
              </Link>
              <Link className="link" to="login">
                Login
              </Link>
              <div onClick={() => setOpen(!open)}>
                <FontAwesomeIcon
                  className="faxmark"
                  icon={faXmark}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Header;
