import { ListGroup, Button, Modal, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import update from './../../middleware/crud/update';

const UpdateList = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.list.lists);
  const user = useSelector(state => state.user);
  const modals = useSelector(state => state.modals);
  const selectedBook = useSelector(state => state.books.selectedBook);

  const handleUpdate = (list) => {
    console.log(list);
    list.books.push(selectedBook._id);
    console.log(list);
    dispatch(update(user.token, `lists/${list._id}`, list));
    closeModal();
  }

  const closeModal = () => {
    dispatch({type: 'update_list_modal', payload: false});
  }

  return (
    <Modal show={modals.update_list_modal} onHide={closeModal}>
      <Modal.Header closeButton />
      <ListGroup>
        {
          lists.map(list => (
            <Container key={list._id}>
              <ListGroup.Item>{list.listName}</ListGroup.Item>
              <Button onClick={() => handleUpdate(list)}>Add</Button>
            </Container>
          ))
        }
      </ListGroup>
    </Modal>
  )
}

export default UpdateList;