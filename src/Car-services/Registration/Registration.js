import React from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../images/log.jpg";
import Button from "react-bootstrap/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);



   const signUpHandle = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email,password)
   }
   if (loading) {
    return <Loading></Loading>;
  }
   if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="SignUp_area">
      <div className="SignUp-img">
        <img src={login} alt="" />
      </div>
      <div className="signUp-info">
        <h1 className="user-heading">Sign Up</h1>

        <div className="form">
          <Form onSubmit={signUpHandle}>
            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control
                className="input-control"
                type="text"
                placeholder="User Name"
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control
                className="input-control"
                type="email"
                placeholder="Enter Email"
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
            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control
                className="input-control"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </Form.Group>
            <Button className="button" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
        <div>
          <span className="account">Please Login </span>
          <Link className="user-join" to="/login">
            Login
          </Link>
        </div>
        <div>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Registration;
