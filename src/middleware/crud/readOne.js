import axios from 'axios';

function getReadOnePayload(obj) {
  const action = {
    type: `get_one_${obj[0].item}`,
    payload: obj
  }
  return action;
}

const readOneRequest = async (token, endpoint) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function readOne(token, endpoint) {
  return async function (dispatch) {
    try {
      const bookRecord = await readOneRequest(token, endpoint);
      return dispatch(getReadOnePayload(bookRecord));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default readOne;