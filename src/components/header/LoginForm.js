import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { When } from 'react-if';
import signin from './../../middleware/signin';
import signup from './../../middleware/signup';
import readAll from './../../middleware/crud/readAll';

const LoginForm = () => {
  const dispatch = useDispatch();
  const modals = useSelector(state => state.modals);
  const user = useSelector(state => state.user);

  const [ isSigningIn, setIsSigningIn ] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    closeModal();
    try {
      if(isSigningIn) {
        dispatch(signin({username: e.target.username.value, password: e.target.password.value}));        
      } else {
        dispatch(signup({username: e.target.username.value, password: e.target.password.value}));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const closeModal = () => {
    dispatch({ type: 'login_modal', payload: false });
  }

  return (
    <Modal show={modals.login_modal} onClose={closeModal}>
      <Modal.Header closeButton>Sign In</Modal.Header>
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

        <When condition={isSigningIn}>
          <div onClick={() => setIsSigningIn(false)}>Create an Account</div>
        </When>
        <When condition={!isSigningIn}>
          <div onClick={() => setIsSigningIn(true)}>Sign In with Existing Account</div>
        </When>
      </Form>
    </Modal>
  )
}

export default LoginForm;