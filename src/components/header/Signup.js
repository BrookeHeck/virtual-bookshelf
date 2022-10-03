import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';
const axios = require('axios');

export default function Signup({setUser, setIsAuthenticated}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Sign Up</Button>
      <SignupForm 
        setUser={setUser}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsAuthenticated={setIsAuthenticated}  
      />
    </>
  );
};

// get a user from the database, search database by the email
// if the database search comes up empty, create a user using credentials from Auth0
async function createUser(e) {
  try {
    const config = {
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/signup',
      data: {username: e.target.username.value, password: e.target.password.value},
    }
    let res = await axios(config);
    return res.data;
  } catch(e) {
    console.log(e);
  }
}

const SignupForm = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>Sign Up</Modal.Header>
      <Form onSubmit={async (e) => {
        e.preventDefault();
        const user = await createUser(e);
        localStorage.setItem('token', `${user.token}`);
        localStorage.setItem('id', `${user._id}`);
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