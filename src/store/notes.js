const initialState = {
  activeNote: null,
  noteList: [],
}

const updateNote = (list, updatedNote) => {
  return list.map(note => {
    if(note.id !== updatedNote.id) return note;
    else return updateNote;
  })
}

const deleteNote = (list, deletedNote) => {
  return list.filter(note => note.id !== deletedNote.id);
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'get_all':
      state = {...state, noteList: action.payload.noteList };
      return state;
    case 'create':
      state = {...state, noteList: state.noteList.push(action.payload)};
      return state;
    case 'update':
      state = {...state, noteList: updateNote(state.list, action.payload)};
      return state;
    case 'delete':
      state = {...state, noteList: deleteNote(state.list, action.payload)};
      return state;
    case 'change_active':
      state = {...state, activeNote: action.payload};
      return state;
    default: return state;
  }
}

export default reducer;