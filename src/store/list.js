const initialState = {
  activeList: 'All Books',
  lists: []
}

const getActive = (activeList, listName) => {
  if(activeList === listName) return 'All Books';
  else return activeList;
}

const removeList = (listArr, list) => {
  return listArr.filter(currList => currList._id !== list._id);
}

const updateList = (listArr, list) => {
  return listArr.map(currList => {
    if(currList._id === list._id) return list;
    else return currList;
  });
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
      const updatedList = updateList(state.lists, action.payload);
      state = { ...state, lists: updatedList}
      return state;
    case 'delete_list':
      const filteredList = removeList(state.lists, action.payload);
      const active = getActive(state.activeList, action.payload.listName);
      state = {activeList: active, lists: filteredList}
      return state;
    default: return state;
  }
}

export default reducer;