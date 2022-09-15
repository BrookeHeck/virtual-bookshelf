import { useAuth0 } from '@auth0/auth0-react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';


export default function BookForm({ showModal, setShowModal, setUser, dbUser, action, selectedBook }) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const addBook = async (jwt, newBook) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      let res = await axios.post(`${process.env.REACT_APP_SERVER}/add-book/${dbUser._id}`, newBook, config);
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const editBook = async (jwt, updatedBook) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      let res = await axios.put(`${process.env.REACT_APP_SERVER}/update-book/${dbUser._id}`, updatedBook, config);
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(false);

    const date = new Date();
    const newBook = {
      title: e.target.title.value || selectedBook.title,
      author: e.target.author.value || selectedBook.author,
      genre: e.target.genre.value || selectedBook.genre,
      date: selectedBook.date || `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      status: e.target.status.value || selectedBook.status,
      lists: selectedBook.lists || ['All Books'],
      notes: selectedBook.notes || [],
      quotes: selectedBook.quotes || [],
      _id: selectedBook._id || ''
    }


    if (isAuthenticated) {
      const getToken = async () => {
        let res = await getIdTokenClaims();
        return res.__raw;
      }
      getToken()
        .then(jwt => {
          if(action === 'add') addBook(jwt, newBook);
          if(action === 'edit') editBook(jwt, newBook);
        })
        .catch(e => console.log(e));
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