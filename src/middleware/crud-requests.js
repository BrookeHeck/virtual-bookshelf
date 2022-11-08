export const getAll = async (instance, payload) => {
  try {
    const response = await instance({ method: 'get', url: payload.url });
    return [...response.data];
  } catch (e) {console.log(e);}
}

export const getOne = async (instance, payload) => {
  try {
    const response = await instance({ method: 'get', url: payload.url });
    return response.data;
  } catch (e) {console.log(e);}
}

export const create = async (instance, payload) => {
  try {
    const response = await instance({
      method: 'post',
      url: payload.url,
      data: payload.data,
    });
    return response.data;
  } catch (e) {console.log(e);}
}

export const update = async (instance, payload) => {
  try {
    const response = await instance({
      method: 'put',
      url: payload.url,
      data: payload.data,
    });
    return response.data;
  } catch (e) {console.log(e);}
}

export const deleteOne = async (instance, payload) => {
  try {
    const response = await instance({ method: 'delete', url: payload.url });
    return response.data;
  } catch (e) {console.log(e);}
}