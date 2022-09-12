import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';
import Filter from './Filter.js';
import './../../css/MyBooks.css';

export default function MyBooks() {
  const [books, updateBooks] = useState([]);
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        let res = await getIdTokenClaims();
        return res.__raw;
      }
      try {
        getToken().then(jwt => getBooks(jwt, user)).then(allBooks => updateBooks(allBooks));
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuthenticated, getIdTokenClaims, user]);


  return (
    <Container id='myBooksContainer'>
      <Row id="filterContainer">
        <Filter />

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

async function getBooks(jwt, user) {
  try {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books',
      params: {email: user.email}
    }
    let res = await axios(config);
    return res.data[0].userBooks;
  } catch (e) {
    console.log(e);
  }
}



