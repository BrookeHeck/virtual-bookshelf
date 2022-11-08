const initialState = {
  user: null,
  token: null,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'login':
      state = {user: action.payload.user, token: action.payload.token}
      return state;
    case 'logout':
      state = initialState;
      return state;
    default: return state
  }
}

export default reducer;