import axios from 'axios';

function getReadAllPayload(obj) {
  const action = {
    type: `get_all_${obj[0].item}`,
    payload: obj
  }
  return action;
}

const readAllRequest = async (token, endpoint) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function readAll(token, endpoint) {
  return async function (dispatch) {
    try {
      const bookArr = await readAllRequest(token, endpoint);
      return dispatch(getReadAllPayload(bookArr));
    } catch (e) {
    }
  }
}

export default readAll;