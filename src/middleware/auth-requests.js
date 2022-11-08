export const signup = async (instance, payload) => {
  const response = await instance({
    method: 'post',
    url: payload.url,
    data: payload.auth,
  });
  return response.data;
}

export const signin = async (instance, payload) => {
  const response = await instance({
    method: 'post',
    url: payload.url,
    auth: payload.auth,
  });
  return response.data;
}
