import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';
import './../../css/MyBooks.css';

export default function MyBooks() {
  const [books, updateBooks] = useState([]);
  useEffect(() => {
    getBooks().then(allBooks => updateBooks(allBooks.data));
  }, []);
  return (
    <Container>
      <Row id="filterContainer">
        <Col xs='4'>
          <Card style={{ width: '15rem', height: '100vh', marginLeft: '10px' }} >
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <Card.Text>Genre</Card.Text>
              <Card.Text>Date Read</Card.Text>
              <Card.Text>Finished</Card.Text>
              <Button style={{ marginTop: '2.5rem' }}>Add to Collection</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs='8'>
          <Container id="allBookDiv">
            {books.map(book => {
              return <Book
                key={book._id}
                title={book.title}
                author={book.author}
                notes={book.notes}
                quotes={book.quotes}
              />
            })}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

async function getBooks() {
  try {
    return await axios.get(`${process.env.REACT_APP_SERVER}/books`);
  } catch (e) {
    console.log(e);
  }
}



