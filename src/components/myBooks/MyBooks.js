import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import Book from './Book.js';
import Filter from './Filter.js';
import './../../css/MyBooks.css';

export default function MyBooks({ userUpdate, dbUser }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container id='myBooksContainer'>
        <Button onClick={() => setShowModal(true)} >Add to Collection</Button>
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
      <AddBookForm showModal={showModal} setShowModal={setShowModal} userUpdate={userUpdate} />
    </>
  );
}


function AddBookForm({ showModal, setShowModal, userUpdate }) {
  // const { isAuthenticated, getIdTokenClaims, user } = useAuth0();

  // if (isAuthenticated) {
  //   const getToken = async () => {
  //     let res = await getIdTokenClaims();
  //     return res.__raw;
  //   }
  //   getToken()
  //     .then(jwt => userUpdate(jwt, user))
  //     .catch(e => console.log(e))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newBook = {
      title: e.target.title.value || 'Title',
      author: e.target.author.value || 'Author',
      genre: e.target.genre.value || 'Genre',
      date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      status: e.target.status.value || 'Not Started',
      lists: ['All Books'],
      notes: [],
      quotes: []
    }
    console.log(newBook);
  }


  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>Add a Book</Modal.Header>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='title'>Title</Form.Label>
          <Form.Control type="title" placeholder="Enter Title" id='title' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='author'>Author</Form.Label>
          <Form.Control type="author" placeholder="Enter Author" id='author' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='genre'>Genre</Form.Label>
          <Form.Control type="genre" placeholder="Enter Genre" id='genre' />
        </Form.Group>

        {
          ['Finished', 'In Progress', 'Not Started'].map((status, idx) => (
            <Form.Check
              inline
              label={status}
              name='group1'
              type='radio'
              id='status'
              key={idx}
            />
          ))
        }

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Modal>
  )
}

