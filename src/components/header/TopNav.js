import { Navbar, Container, Button, NavItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout.js';
import LoginForm from './LoginForm.js';
import './../../css/TopNav.css';


export default function TopNav({ setPage }) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const openLoginForm = () => {
    dispatch({ type: 'login_modal', payload: true });
  }

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand id='brand' >Virtual Bookshelf</Navbar.Brand>

        <Container className='justify-content-center'>
          <NavItem onClick={() => setPage('home')}>Home</NavItem>
          <NavItem onClick={() => setPage('my-books')}>My Books</NavItem>
          <NavItem onClick={() => setPage('search-books')}>Search Books</NavItem>
        </Container>

        <Container className='justify-content-end' id='login-logout'>
          {user.isAuthenticated ?
            <NavItem><Logout /></NavItem> :
            <NavItem>
              <Button onClick={openLoginForm}>Login</Button>
              <LoginForm />
            </NavItem>
          }
        </Container>
      </Navbar>
    </>
  );
}