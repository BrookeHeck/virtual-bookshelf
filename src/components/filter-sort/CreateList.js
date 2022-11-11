import { Form, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import create from '../../middleware/crud/create';

const CreateList = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const modals = useSelector(state => state.modals);

  function closeModal() {
    dispatch({type: 'add_list_modal', payload: false});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newList = {
      item: 'list',
      listName: e.target.listName.value,
      user_id: user.user._id,
      books: [],
    }
    dispatch(create(user.token, 'lists', newList));
    closeModal();
  }

  return (
    <Modal show={modals.add_list_modal} onHide={closeModal}>
      <Modal.Header closeButton />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="listName">
          <Form.Label>List Name</Form.Label>
          <Form.Control type="text" placeholder="Enter List Name" />
        </Form.Group>

        <Button variant="primary" type="submit">Add List</Button>
      </Form>
    </Modal>
  )

}

export default CreateList;
