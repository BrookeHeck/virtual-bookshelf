import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';
import './../../css/MyBooks.css';

export default function MyBooks() {
  const [books, updateBooks] = useState([]);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) {
      const getToken = async () => {
        let res = await getIdTokenClaims();
        return res.__raw;
      }
      try {
        getToken().then(jwt => getBooks(jwt)).then(allBooks => updateBooks(allBooks));
      } catch(e) {
        console.log(e);
      }
    }
  }, [isAuthenticated, getIdTokenClaims]);


  return (
    <Container id='myBooksContainer'>
      <Row id="filterContainer">
        <Col xs='3' lg='2'>
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

        <Col xs='9' lg='10'>
          <Container id="allBookDiv">
            {
            books.map(book => {
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
  );
}

async function getBooks(jwt) {
  console.log(jwt);
  try {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
    }
    let res = await axios(config);
    return res.data.userBooks;
  } catch (e) {
    console.log(e);
  }
}



