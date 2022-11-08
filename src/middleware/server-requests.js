import axios from 'axios';
import store from './../store';

const token = store.getState().user.token;

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: `Authorization Bearer ${token}`
})

const getAll = async (payload) => {
  try {
    const response = await instance({url: payload.url});
    return response.data;
  } catch(e) {
    throw new Error('Invalid Request');
  }
}

const getOne = async (payload) => {

}

const create = async (payload) => {

}

const update = async (payload) => {

}

const deleteOne = async (payload) => {

}

const makeRequest = async (action, payload) => {
  switch(action) {
    case 'get_all':
      return await getAll(payload);
    case 'get_one':
      return await getOne(payload);
    case 'create':
      return await create(payload);
    case 'update':
      return await update(payload);
    case 'delete_one':
      return await deleteOne(payload);
    default: return null;
  }
}

export default makeRequest;