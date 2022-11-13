import axios from 'axios';

function getCreatePayload(obj) {
  const action = {
    type: `create_${obj.item}`,
    payload: obj
  }
  return action;
}

const createRequest = async (token, endpoint, body) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
      data: body,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function create(token, endpoint, body) {
  return async function (dispatch) {
    try {
      const createdRecord = await createRequest(token, endpoint, body);
      return dispatch(getCreatePayload(createdRecord));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default create;