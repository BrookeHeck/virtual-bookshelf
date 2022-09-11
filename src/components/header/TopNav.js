import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Profile from './Profile.js';
import './../../css/TopNav.css';

export default function TopNav() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Profile />
        </Container>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/my-books">My Books</Nav.Link>
            <Nav.Link href="/book-search">Search For Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Container>
          <Button>
            Logout
          </Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
}