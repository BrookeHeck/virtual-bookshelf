import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Book({book}) {
  const dispatch = useDispatch();
  const modals = useSelector(state => state.modals);

  const deleteBook = async () => {
    // call the delete middleware
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
          <Card.Text >Notes</Card.Text>
          

          {/* <Button
            variant="primary"
            onClick={() => { setShowModal(true); setAction('edit'); setSelectedBook(book) }}
          >
            Edit
          </Button> */}

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