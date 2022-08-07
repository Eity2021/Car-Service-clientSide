import React from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../images/log.jpg";
import Button from "react-bootstrap/Button";
import "../../CssPage/CssPage.css";
import "../../CssPage/Responsive.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

 const signInHandle = event => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  signInWithEmailAndPassword(email,password)
 }

 if (loading) {
  return <Loading></Loading>;
}
 if (user) {
  navigate(from, { replace: true });
}
  return (
    <div className="login_area">
      <div className="login-img">
        <img src={login} alt="" />
      </div>
      <div className="login-info">
        <h1 className="user-heading">Login</h1>

        <div className="form">
          <Form onSubmit={signInHandle}>
            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control
                className="input-control"
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control
                className="input-control"
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <div className="forget">
              <Button className="password">Forget password ?</Button>
            </div>
            <Button className="button" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div>
          <span className="account">Don't have an account ? </span>
          <Link className="user-join" to="/registration">
            Registration
          </Link>
        </div>
        <div>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Login;
