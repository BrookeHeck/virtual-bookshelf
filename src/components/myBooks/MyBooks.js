import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Book from './Book.js';
import Filter from './Filter.js';
import BookForm from './BookForm.js';
import './../../css/MyBooks.css';

export default function MyBooks({ setUser, dbUser }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');

  return (
    <>
      <Container id='myBooksContainer'>
        <Button
          onClick={() => {
            setAction('Add');
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
                    title={book.title}
                    author={book.author}
                    notes={book.notes}
                    quotes={book.quotes}
                  />
                })
              }
            </Container>
          </Col>
        </Row>
      </Container>
      <BookForm showModal={showModal} setShowModal={setShowModal} setUser={setUser} dbUser={dbUser} action={action} />
    </>
  );
}
