import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout.js';
import LoginForm from './LoginForm.js';
import './../../css/TopNav.css';


export default function TopNav() {
  const user = useSelector(state => state.user);
  const modals = useSelector(state => state.modals);
  const dispatch = useDispatch();

  const openLoginForm = () => {
    dispatch({type: 'login_modal', payload: true});
    console.log(modals);
  }

  return (
    <>
      <Navbar bg="light">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/my-books">My Books</Nav.Link>
            <Nav.Link href="/book-search">Search For Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Container>
          { user.isAuthenticated ? 
            <Logout /> : 
            <>
              <Button onClick={openLoginForm}>Login</Button>
              <LoginForm />
            </>
          }
        </Container>
      </Navbar>
      <br />
    </>
  );
}