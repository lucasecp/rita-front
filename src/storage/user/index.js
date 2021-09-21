
export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const setLocalStorage = ({id,token}) => {
  const data = { id, token};
  localStorage.setItem('user', JSON.stringify(data));
};
export const deleteLocalStorage = () => localStorage.removeItem('user');

