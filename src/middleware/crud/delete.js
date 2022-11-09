import axios from 'axios';

function getDeletePayload(obj) {
  console.log(obj);
  const action = {
    type: `delete_${obj.item}`,
    payload: obj
  }
  console.log(action);
  return action;
}

const deleteRequest = async (token, endpoint) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
    });
    return response.data[0];

  } catch (e) { console.log(e) }
}

function deleteOne(token, endpoint) {
  return async function (dispatch) {
    try {
      const bookRecord = await deleteRequest(token, endpoint);
      console.log(bookRecord);
      return dispatch(getDeletePayload(bookRecord));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default deleteOne;