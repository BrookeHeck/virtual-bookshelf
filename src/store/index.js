import { combineReducers, configureStore, applyMiddleware } from 'redux';
import crudRequests from '../middleware/crud-requests';
import books from './books';
import list from './list';
import notes from './notes';
import user from './user';

const rootReducer = combineReducers({
  books,
  list,
  notes,
  user
});

const CrudMiddleware = applyMiddleware(crudRequests);

const store = configureStore(rootReducer, CrudMiddleware);

export default store;