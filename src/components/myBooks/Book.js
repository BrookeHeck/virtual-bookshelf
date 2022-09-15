import { Card, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function Book({ book, setAction, setShowModal, setSelectedBook, dbUserID, setUser }) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const deleteBook = async () => {
    if (isAuthenticated) {
      const getToken = async () => {
        getIdTokenClaims()
          .then(res => res.__raw)
          .catch(e => console.log(e));
      }
      getToken()
        .then(jwt => {
          const config = {
            headers: { "Authorization": `Bearer ${jwt}` }
          }
          console.log(book._id);
          let user = axios.put(`${process.env.REACT_APP_SERVER}/delete-book/${dbUserID}`, book._id , config);
          console.log(user);
          return user;
        })
        .then(res => setUser(res.data))
        .catch(e => console.log(e));
    }
  }





  return (
    <>
      <Card style={{ width: '200px', margin: '0 auto' }}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
          <Card.Text>{book.genre}</Card.Text>
          <Card.Text>{book.date}</Card.Text>
          <Card.Text>{book.status}</Card.Text>
          <Card.Link href="#">Notes</Card.Link>
          <Card.Link href="#">Quotes</Card.Link>

          <Button
            variant="primary"
            onClick={() => { setShowModal(true); setAction('edit'); setSelectedBook(book) }}
          >
            Edit
          </Button>

          <Button
            variant="primary"
            onClick={deleteBook}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}