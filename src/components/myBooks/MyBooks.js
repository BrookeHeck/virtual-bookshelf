import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import Book from './Book.js';
import Filter from './Filter.js';
import BookForm from './BookForm.js';
import './../../css/MyBooks.css';

export default function MyBooks() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const books = useSelector(state => state.books);
  const modals = useSelector(state => state.modals);

  const toggleModal = (showModal) => {
    dispatch({ type: 'add_book_modal', payload: showModal });
  }



  return (
    <When condition={user.isAuthenticated}>
      {/* <Filter /> */}
      <Button onClick={() => toggleModal(true)}>Add to Collection</Button>
      <Container>
        {
          books.bookList.map(book => (
            <Book book={book} key={book._id} />
          ))
        }
      </Container>
      <BookForm />
    </When>
  );
}
