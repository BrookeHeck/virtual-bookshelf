

const initialState = {
  selectedBook: null,
  bookList: [],
  status: 'idle', // idle || loading || succeeded || failed
  error: null,
}

const updateBook = (list, updatedBook) => {
  return list.map(book => {
    if(book._id !== updatedBook._id) return book;
    else return updateBook;
  })
}

const deleteBook = (list, deletedBook) => {
  console.log(deletedBook);
  return list.filter(book => book._id !== deletedBook._id);
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'get_all_book':
      state = {...state, bookList: action.payload.bookList };
      return state;
    case 'create_book':
      state = {...state, bookList: [...state.bookList, action.payload]};
      return state;
    case 'update_book':
      state = {...state, bookList: updateBook(state.bookList, action.payload)};
      return state;
    case 'delete_book':
      state = {...state, bookList: deleteBook(state.bookList, action.payload)};
      return state;
    case 'change_active_book':
      state = {...state, selectedBook: action.payload};
      return state;
    default: return state;
  }
}

export default reducer;