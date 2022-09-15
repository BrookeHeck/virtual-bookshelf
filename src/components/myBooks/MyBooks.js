import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Book from './Book.js';
import Filter from './Filter.js';
import BookForm from './BookForm.js';
import './../../css/MyBooks.css';

export default function MyBooks({ setUser, dbUser }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

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
                dbUser.userBooks &&
                dbUser.userBooks.map(book => {
                  return <Book
                    key={book._id}
                    book={book}
                    setShowModal={setShowModal}
                    setAction={setAction}
                    setSelectedBook={setSelectedBook}
                    setUser={setUser}
                    dbUserID={dbUser._id}
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
        setUser={setUser}
        dbUser={dbUser}
        action={action}
        selectedBook={selectedBook} />
    </>
  );
}
