import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Book from './Book.js';
import Filter from './Filter.js';
import BookForm from './BookForm.js';
import './../../css/MyBooks.css';
import axios from 'axios';

export default function MyBooks({ user_id }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');
  const [selectedBook, setSelectedBook] = useState({});
  const {isAuthenticated, getIdTokenClaims} = useAuth0();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const jwt = await getIdTokenClaims();
        const config = {
          headers: { "Authorization": `Bearer ${jwt.__raw}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/my-books/${user_id}`,
        }
        const res = await axios(config);
        setBooks(res.data);
      } catch(e) {
        console.log(e);
      }
    }
    if(isAuthenticated) {
      getBooks();
    }
  }, [getIdTokenClaims, isAuthenticated, user_id, books]);

  return (
    <>
      <Container id='myBooksContainer'>
        <Button
          onClick={() => {
            setAction('add');
            setShowModal(true);
          }
          } >
          Add to Collection
        </Button>
        <Row id="filterContainer">
          <Filter />

          <Col xs='9' lg='10'>
            <Container id="allBookDiv">
              {
                books &&
                books.map(book => {
                  return <Book
                    key={book._id}
                    book={book}
                    setShowModal={setShowModal}
                    setAction={setAction}
                    setSelectedBook={setSelectedBook}
                  />
                })
              }
            </Container>
          </Col>
        </Row>
      </Container>

      <BookForm
        showModal={showModal}
        setShowModal={setShowModal}
        user_id={user_id}
        action={action}
        selectedBook={selectedBook}
        books={books}
        setBooks={setBooks}
      />
    </>
  );
}
