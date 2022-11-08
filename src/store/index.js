import { createStore, combineReducers } from 'redux';
import books from './books';
import list from './list';
import notes from './notes';

const rootReducer = combineReducers({
  books,
  list,
  notes,
});

const store = createStore(rootReducer);

export default store;