import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from './Logout.js';
import Login from './Login';
import Signup from './Signup';
import './../../css/TopNav.css';

export default function TopNav({isAuthenticated, setIsAuthenticated}) {

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
          { isAuthenticated ? 
            <Logout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/> : 
            <>
              <Signup isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
              <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </>
          }
        </Container>
      </Navbar>
      <br />
    </>
  );
}