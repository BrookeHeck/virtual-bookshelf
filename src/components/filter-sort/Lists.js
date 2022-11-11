import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CreateList from './CreateList';

const Lists = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  console.log(list.lists);

  const changeActiveList = (e) => {
    console.log(e.target.value);
  }

  const showModal = () => {
    dispatch({type: 'add_list_modal', payload: true});
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Select a List</Form.Label>
        <Form.Select onChange={changeActiveList}>
          <option>All Books</option>
          {
            list.lists.map(currList => (
              <option key={currList._id}>{currList.listName}</option>
            ))
          }
        </Form.Select>
      </Form.Group>

      <Button onClick={showModal}>Add List</Button>
      <CreateList />
    </>
  )  
}

export default Lists;