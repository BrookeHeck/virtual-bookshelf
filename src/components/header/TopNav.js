import { Navbar, Nav, Container } from 'react-bootstrap';
import Profile from './Profile.js';
import Logout from '../auth0/Logout.js';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './../auth0/Login';
import './../../css/TopNav.css';

export default function TopNav() {
  const { isAuthenticated, error } = useAuth0();

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Navbar bg="light">
        <Container>
          { isAuthenticated && <Profile /> }
        </Container>
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
          { isAuthenticated ? <Logout/> : <Login/> }
        </Container>
      </Navbar>
      <br />
    </>
  );
}