function getDisplayListPayload(arr) {
  const action = {
    type: 'change_display_list',
    payload: arr
  }
  return action;
}

const filterByList = (bookList, idList) => {
  const filteredArr = [];
  for(let id of idList) {
    for(let book of bookList) {
      if(book._id === id) {
        filteredArr.push(book);
        break;
      }
    }
  }
  return filteredArr;
}

function filterAndSort(bookList, idList) {
  return async function (dispatch) {
    try {
      const displayList = filterByList(bookList, idList);
      console.log(displayList);
      return dispatch(getDisplayListPayload(displayList));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default filterAndSort;