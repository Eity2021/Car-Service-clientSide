import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Dropdown from "./../Dropdown/Dropdown";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

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

      <div className={`header_link ${open ? "up" : "down"}`}>
        <div className="header-linkup">
          <div className="link-down">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="about">
            About
          </Link>
          <Link className="link" to="service">
            Service
          </Link>
          </div>
         

          <div>
            <Dropdown></Dropdown>
          </div>

          {/* {
            user ? <button className="SignUpLink" onClick={handleSignOut}>Sign Out</button> : <Link className="link" to="login">
            Login
          </Link>
          } */}
          <div onClick={() => setOpen(!open)}>
            <FontAwesomeIcon
              className="faxmark"
              icon={faXmark}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
