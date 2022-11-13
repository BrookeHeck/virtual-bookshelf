import axios from 'axios';

function getUpdatePayload(obj) {
  const action = {
    type: `update_${obj.item}`,
    payload: obj
  }
  return action;
}

const updateRequest = async (token, endpoint, body) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
      data: body,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function update(token, endpoint, body) {
  return async function (dispatch) {
    try {
      const bookRecord = await updateRequest(token, endpoint, body);
      return dispatch(getUpdatePayload(bookRecord));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default update;