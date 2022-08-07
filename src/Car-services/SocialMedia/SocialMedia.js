import React from "react";
import Button from "react-bootstrap/Button";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./../../Loading/Loading";

const SocialMedia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
    errorElement = (
      <div className="text-danger">
        {" "}
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <small>{errorElement}</small>
      <div className="icons-list">
        <p className="icon-text">or Login With </p>
        <span>
          <Button className="direct-link" onClick={() => signInWithGoogle()}>
            Google
          </Button>
        </span>
        <span>
          <Button className="direct-link">Facebook</Button>
        </span>
        <span>
          <Button className="direct-link">Github</Button>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
