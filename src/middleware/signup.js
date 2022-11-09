import axios from 'axios';

function getSignUpPayload(user) {
  return {
    type: 'login',
    payload: {
      user,
      token: user.token,
    }
  }
}

async function createUser (auth) {
  try {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/signup`,
      data: auth,
    }
    const response = await axios(config);
    return response.data;
  } catch (e) { console.log(e) }
}



function signup(auth) {
  return async function (dispatch) {
    try {
      const user = await createUser(auth);
      return dispatch(getSignUpPayload(user));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default signup;