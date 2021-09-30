import apiUser from "@/services/apiUser";

export const getUserStorage = () => JSON.parse(localStorage.getItem('user'));

export const setLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};
export const deleteLocalStorage = () => localStorage.removeItem('user');


export const getHeaderToken = () => apiUser.defaults.headers.token;
export const deleteHeaderToken = () => delete apiUser.defaults.headers.token;

export const setHeaderToken = (token) => {apiUser.defaults.headers.token = token; };