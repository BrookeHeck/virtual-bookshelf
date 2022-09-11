import { Navbar, Container } from 'react-bootstrap';
import Profile from './Profile.js';;

export default function Nav() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Profile />
        </Container>
        <Container>

        </Container>
      </Navbar>
      <br />
    </>
  );
}