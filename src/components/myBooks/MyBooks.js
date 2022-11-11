import { Button, Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import readAll from '../../middleware/crud/readAll.js';
import { When } from 'react-if';
import Book from './Book.js';
import Filter from '../filter-sort/Filter';
import BookForm from './BookForm.js';
import './../../css/MyBooks.css';

export default function MyBooks() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const books = useSelector(state => state.books);

  useEffect(() => {
    if (user.isAuthenticated) {
      dispatch(readAll(user.token, `my-books/${user.user._id}`));
      dispatch(readAll(user.token, `lists/${user.user._id}`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isAuthenticated])

  const toggleModal = (showModal) => {
    dispatch({ type: 'add_book_modal', payload: showModal });
  }



  return (
    <When condition={user.isAuthenticated}>
      <Button onClick={() => toggleModal(true)} id='addButton' >Add to Collection</Button>

      <Container>
        <Row>
          <Col xs={4}><Filter /></Col>
          <Col xs={8} id='booksCol'>
            {
              books.bookList.map(book => (
                <Book book={book} key={book._id} />
              ))
            }
          </Col>
        </Row>
      </Container>
      <BookForm />
    </When>
  );
}
