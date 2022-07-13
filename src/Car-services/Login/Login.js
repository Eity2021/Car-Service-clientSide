import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../images/log.jpg";
import Button from 'react-bootstrap/Button';


const Login = () => {
  return (
    <div className="login_area">
      <div className="login-img">
        <img src={login} alt="" />
      </div>
      <div className="login-info">
        <h1 className="user-heading">Login</h1>

        <div className="form">
          <Form>
            <Form.Group className="mb-3 input" controlId="formBasicEmail">    
              <Form.Control className="input-control"  type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control className="input-control"  type="password" placeholder="Password" />
            </Form.Group>
            <div className="forget">
            <Button className='password'>Forget password ?</Button>
            </div>
            <Button className="button"   variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div>
            <span className="account">Don't have an account ? </span>
                 <Link className="user-join" to="/registration">Registration</Link>
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

export default Login;
