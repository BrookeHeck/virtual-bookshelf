import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Book from './Book.js';
import Filter from './Filter.js';
import BookForm from './BookForm.js';
import Notes from './Notes';
import './../../css/MyBooks.css';
import axios from 'axios';

export default function MyBooks({ id, setId }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');
  const [selectedBook, setSelectedBook] = useState({});
  const [books, setBooks] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/my-books/${localStorage.getItem('id')}`,
        }
        const res = await axios(config);
        setBooks(res.data);
      } catch(e) {
        console.log(e);
      }
    }
    if(localStorage.getItem('token')) getBooks();
  }, [setBooks, books]);

  return (
    <>
      {
      !showNotes && 
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
                    setShowNotes={setShowNotes}
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
        action={action}
        selectedBook={selectedBook}
        books={books}
        setBooks={setBooks}
      />
    </>
    }

    {
      showNotes &&
      <Notes book_id={selectedBook._id} setShowNotes={setShowNotes}/>
    }
    </>
  );
}
