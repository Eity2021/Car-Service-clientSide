import {
  CDropdownToggle,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { Link } from "react-router-dom";
import React from "react";
import eity from "../../images/eity.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';
const Dropdown = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div>
      <CDropdown>
        <CDropdownToggle href="#" className="dropdown-border">
          <div>
            <img  className="dropdown-img"  src={eity} alt="" />
          </div>
        </CDropdownToggle>
        <CDropdownMenu>
        <CDropdownItem href="#">Name</CDropdownItem>
          <CDropdownItem href="#">
          {
            user ? <button className="SignOutLink" onClick={handleSignOut}>Sign Out</button> : <Link className="linkUp" to="login">
            Login
          </Link>
          }
          </CDropdownItem>
          <CDropdownItem href="#" className="linkUp">settings</CDropdownItem>
          {/* <CDropdownItem href="#">Something else here</CDropdownItem> */}
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export default Dropdown;
