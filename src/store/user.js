const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'login':
      state = {user: action.payload.user, token: action.payload.token, isAuthenticated: true}
      return state;
    case 'logout':
      state = initialState;
      return state;
    default: return state
  }
}

export default reducer;