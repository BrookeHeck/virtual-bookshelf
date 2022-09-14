import { Card, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

export default function Book({ book, setAction, setShowModal, setSelectedBook }) {

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
            onClick={() => {setShowModal(true); setAction('edit'); setSelectedBook(book)}}
            >
            Edit
          </Button>

          <Button
            variant="primary"
            onClick={() => {setSelectedBook(book);}}
            >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}