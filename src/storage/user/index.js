export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const setLocalStorage = (payload) => {
  const data = { id: payload.id, token: payload.token };
  localStorage.setItem('user', JSON.stringify(data));
};
export const deleteLocalStorage = () => localStorage.removeItem('user');