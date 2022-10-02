import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Book({ book, setAction, setShowModal, setSelectedBook }) {

  const deleteBook = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const config = {
          headers: { "Authorization": `Bearer ${token}` }
        }
        let res = axios.delete(`${process.env.REACT_APP_SERVER}/my-books/${book._id}`, config);
        return res.data;
      } catch(e) {console.log(e)}
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