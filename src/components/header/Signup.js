import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import signup from '../../middleware/signup';
import store from './../../store'

export default function Signup({setUser, setIsAuthenticated}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Sign Up</Button>
      <SignupForm />
    </>
  );
};


function handleSubmit(e) {
  try {
    store.dispatch(signup({username: e.target.username.value, password: e.target.password.value}));
    console.log(store.getState());
  } catch(e) {
    console.log(e);
  }
}

const SignupForm = ({ showModal, setShowModal, setIsAuthenticated }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>Sign Up</Modal.Header>
      <Form onSubmit={handleSubmit}>

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