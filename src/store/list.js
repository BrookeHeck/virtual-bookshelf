const initialState = {
  activeList: null,
  lists: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'change_active_list':
      state = { ...state, activeList: action.payload} ;
      return state;
    case 'get_all_list':
      state = { ...state, lists: action.payload };
      return state;
    case 'create_list': 
      const newList = [...state.lists, action.payload];
      state = { ...state, lists:  newList};
      return state;
    case 'update_list':
      state = { ...state, lists: action.payload}
      return state;
    default: return state;
  }
}

export default reducer;