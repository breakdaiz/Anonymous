import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Form,
  Col,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/FormContainer";

import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  let location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      console.log("redirect", redirect);
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      {error && <Message variant={"danger"}>{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={formSubmitHandler}>
        <FormGroup controlId='email'>
          <FormLabel> Email address</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></FormControl>
        </FormGroup>
        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></FormControl>
        </FormGroup>

        <div className='d-grid gap-2 my-3'>
          <Button
            className='btn-block rounded-pill'
            type='submit'
            variant='primary'>
            Login
          </Button>
        </div>
      </Form>
      <Row>
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
