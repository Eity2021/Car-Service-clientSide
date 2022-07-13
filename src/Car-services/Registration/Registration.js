import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../images/log.jpg";
import Button from 'react-bootstrap/Button';
const Registration = () => {
  return (

<div className="SignUp_area">
      <div className="SignUp-img">
        <img src={login} alt="" />
      </div>
      <div className="signUp-info">
        <h1 className="user-heading">Sign Up</h1>

        <div className="form">
          <Form>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">    
              <Form.Control className="input-control"  type="name" placeholder="User Name" />
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicEmail">    
              <Form.Control className="input-control"  type="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control className="input-control"  type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control className="input-control"  type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button className="button"   variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
        <div>
            <span className="account">Please Login </span>
                 <Link className="user-join" to="/login">Login</Link>
        </div>
        <div className="icons-list">
            <p className="icon-text">or Login With </p>
            <span ><Button className="direct-link">Google</Button></span>
            <span ><Button className="direct-link">Facebook</Button></span>
            <span ><Button className="direct-link">Github</Button></span>
            
            
        </div>
      </div>
    </div>


  );
};

export default Registration;
