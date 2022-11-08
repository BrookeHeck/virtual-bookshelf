import axios from 'axios';
import { getAll, getOne, create, update, deleteOne} from './crud-requests';
import { signup, signin } from './auth-requests';


const makeRequest = store => next => async (action) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: `Authorization Bearer ${store.getState().users.token}`
  });

  switch (action.type) {
    case 'get_all':
      return await getAll(instance, action.payload);
    case 'get_one':
      return await getOne(instance, action.payload);
    case 'create':
      return await create(instance, action.payload);
    case 'update':
      return await update(instance, action.payload);
    case 'delete_one':
      return await deleteOne(instance, action.payload);
    case 'signup':
      return await signup(instance, action.payload);
    case 'signin': 
      return await signin(instance, action.payload);
    default: return next(action);
  }
}

export default makeRequest;