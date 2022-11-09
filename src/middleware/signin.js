import axios from 'axios';

function getSignInPayload(user) {
  return {
    type: 'login',
    payload: {
      user,
      token: user.token,
    }
  }
}

const getUser = async (auth) => {
  try {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/signin`,
      auth: auth,
    }
    const response = await axios(config);
    return response.data;
    
  } catch (e) { console.log(e) }
}

function signin(auth) {
  return async function (dispatch) {
    try {
      const user = await getUser(auth);
      return dispatch(getSignInPayload(user));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default signin;