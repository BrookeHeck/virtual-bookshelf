import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CreateList from './CreateList';
import RemoveList from './RemoveList';

const Lists = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  const changeActiveList = (e) => {
    dispatch({type: 'change_active_list', payload: e.target.value});
  }

  const showAddModal = () => {
    dispatch({type: 'add_list_modal', payload: true});
  }

  const showRemoveModal = () => {
    dispatch({type: 'remove_list_modal', payload: true})
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Select a List</Form.Label>
        <Form.Select onChange={changeActiveList}>
          <option key='all-books'>All Books</option>
          {
            list.lists.map(currList => (
              <option key={currList._id}>{currList.listName}</option>
            ))
          }
        </Form.Select>
      </Form.Group>

      <Button onClick={showAddModal}>Add List</Button>
      <Button onClick={showRemoveModal}>Remove List</Button>
      <CreateList />
      <RemoveList />
    </>
  )  
}

export default Lists;