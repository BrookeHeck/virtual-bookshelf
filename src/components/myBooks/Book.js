import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import deleteOne from './../../middleware/crud/delete';

export default function Book({book}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const deleteBook = (book) => {
    // call the delete middleware
    dispatch(deleteOne(user.token, `my-books/${book._id}`));
  }

  const handleEditButton = (book) => {
    dispatch({type: 'change_active_book', payload: book})
    dispatch({type: 'edit_book_modal', payload: true });
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
          

          <Button variant="primary" onClick={() => handleEditButton(book)}>
            Edit
          </Button>

          <Button variant="primary" onClick={() => deleteBook(book)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}