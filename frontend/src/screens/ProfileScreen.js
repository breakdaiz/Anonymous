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

import { getUserDetails } from "../actions/userAction";
import FormContainer from "../components/FormContainer";

import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userRegister);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match!");
    } else {
      // DISPATCH UPDATE PROFILE
      // dispatch(register(name, email, password));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant={"danger"}>{message} </Message>}
        {error && <Message variant={"danger"}>{error} </Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup controlId='name'>
            <FormLabel> Name</FormLabel>
            <FormControl
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}></FormControl>
          </FormGroup>
          <FormGroup controlId='email'>
            <FormLabel> Email address</FormLabel>3
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
          <FormGroup controlId='confirmPassword'>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }></FormControl>
          </FormGroup>

          <div className='d-grid gap-2 my-3'>
            <Button
              className='btn-block rounded-pill'
              type='submit'
              variant='primary'>
              Register
            </Button>
          </div>
        </Form>
      </Col>
      <Col md={9}>
        <h2> My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
