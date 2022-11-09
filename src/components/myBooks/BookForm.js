import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import create from './../../middleware/crud/create';


export default function BookForm() {
  const dispatch = useDispatch();
  const modals = useSelector(state => state.modals);
  const user = useSelector(state => state.user);

  const closeModal = () => {
    dispatch({ type: 'add_book_modal', payload: false })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();

    const date = new Date();
    const newBook = {
      item: 'book',
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      status: e.target.status.value,
      user_id: user.user._id,
    }

    const endpoint = 'my-books';
    const token = user.token;

    try {
      dispatch(create(token, endpoint, newBook));
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Modal show={modals.add_book_modal} onClose={closeModal}>
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