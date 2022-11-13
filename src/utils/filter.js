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

export default filterByList;