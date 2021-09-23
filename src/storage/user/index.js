
export const getUserStorage = () => JSON.parse(localStorage.getItem('user'));

export const setLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};
export const deleteLocalStorage = () => localStorage.removeItem('user');

