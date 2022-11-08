const initialState = {
  activeList: null,
  lists: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'change_active':
      state = { ...state, activeList: action.payload} ;
      return state;
    case 'get_all':
      state = { ...state, lists: action.payload };
      return state;
    case 'create':
      state = { ...state, lists: state.lists.push(action.payload) };
      return state;
    default: return state;
  }
}

export default reducer;