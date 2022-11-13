import { Button, ListGroup, Modal, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import deleteOne from '../../middleware/crud/delete';

const RemoveList = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.list.lists);
  const user = useSelector(state => state.user);
  const modals = useSelector(state => state.modals);

  const handleRemove = (listId) => {
    dispatch(deleteOne(user.token, `lists/${listId}`));
    closeModal();
  }

  const closeModal = () => {
    dispatch({type: 'remove_list_modal', payload: false});
  } 

  return (
    <Modal show={modals.remove_list_modal} onHide={closeModal}>
      <Modal.Header closeButton />
      <ListGroup>
        {
          lists.map(list => (
            <Container key={list._id}>
              <ListGroup.Item>{list.listName}</ListGroup.Item>
              <Button onClick={() => handleRemove(list._id)}>Remove</Button>
            </Container>
          ))
        }
      </ListGroup>
    </Modal>
  )

}

export default RemoveList;