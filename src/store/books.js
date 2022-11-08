const initialState = {
  activeBook: null,
  bookList: [],
}

const updateBook = (list, updatedBook) => {
  return list.map(book => {
    if(book.id !== updatedBook.id) return book;
    else return updateBook;
  })
}

const deleteBook = (list, deletedBook) => {
  return list.filter(book => book.id !== deletedBook.id);
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'get_all':
      state = {...state, bookList: action.payload.bookList };
      return state;
    case 'create':
      state = {...state, bookList: state.bookList.push(action.payload)};
      return state;
    case 'update':
      state = {...state, bookList: updateBook(state.list, action.payload)};
      return state;
    case 'delete':
      state = {...state, bookList: deleteBook(state.list, action.payload)};
      return state;
    case 'change_active':
      state = {...state, activeBook: action.payload};
      return state;
    default: return state;
  }
}

export default reducer;