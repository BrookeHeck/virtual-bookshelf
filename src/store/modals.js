const initialState = {
  login_modal: false,
  add_book_modal: false,
  edit_book_modal: false,
  add_note_modal: false,
  edit_note_modal: false, 
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'login_modal': return {...state, login_modal: action.payload};
    case 'add_book_modal': return {...state, add_book_modal: action.payload};
    case 'edit_book_modal': return {...state, edit_book_modal: action.payload};
    case 'add_note_modal': return {...state, add_note_modal: action.payload};
    case 'edit_note_modal': return {...state, edit_note_modal: action.payload};
    default: return state;
  }
}

export default reducer;