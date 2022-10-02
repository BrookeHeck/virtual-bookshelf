import { useAuth0 } from '@auth0/auth0-react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';


export default function BookForm({ showModal, setShowModal, user_id, action, selectedBook, setBooks, books }) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const addBook = async (jwt, newBook) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/my-books`, newBook, config);
      const updatedList = books;
      updatedList.push(res.data);
      setBooks(updatedList);
    } catch (e) {
      console.log(e);
    }
  }

  const editBook = async (jwt, updatedBook) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      let res = await axios.put(`${process.env.REACT_APP_SERVER}/my-books/${selectedBook._id}`, updatedBook, config);
      const updatedList = books;
      const index = updatedList.findIndex(book => book._id === selectedBook._id);
      updatedList.splice(index, 1, res.data);
      setBooks(updatedList);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowModal(false);

    const date = new Date();
    const newBook = {
      title: e.target.title.value || selectedBook.title,
      author: e.target.author.value || selectedBook.author,
      genre: e.target.genre.value || selectedBook.genre,
      date: selectedBook.date || `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      status: e.target.status.value || selectedBook.status,
      user_id: user_id,
    }
    try {
      if(isAuthenticated) {
        const jwt = await getIdTokenClaims();
        action === 'add' ? addBook(jwt, newBook) : editBook(jwt, newBook);
      }
    } catch(e) {
      console.log(e);
    }
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
              value={status}
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