import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books';
import list from './list';
import notes from './notes';
import user from './user';
import modals from './modals';

const rootReducer = combineReducers({
  books,
  list,
  notes,
  user,
  modals,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;