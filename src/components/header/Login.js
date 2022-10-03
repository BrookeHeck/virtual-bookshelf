import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from "react";
const axios = require('axios');

export default function Login({ setIsAuthenticated }) {
  const [ showModal, setShowModal ] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Log In</Button>
      <LoginForm 
        setShowModal={setShowModal} 
        showModal={showModal} 
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}

// get a user from the database, search database by the email
async function getUser(e) {
  try {
    const config = {
      auth: { username: e.target.username.value, password:e.target.password.value },
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/signin',
    }
    let res = await axios(config);
    return res.data.user;
  } catch (e) {
    console.log(e);
  }
}

const LoginForm = ({ showModal, setShowModal, setIsAuthenticated}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>Sign In</Modal.Header>
      <Form onSubmit={async (e) => {
        e.preventDefault();
        const user = await getUser(e);
        if(user.token) setIsAuthenticated(true);
        localStorage.setItem('token', `${user.token}`);
        localStorage.setItem('id', `${user._id}`);
        localStorage.setItem('role', `${user.role}`);
      }}>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='username'>username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" id='username' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='password'>password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" id='password' />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Modal>
  )
}