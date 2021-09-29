import apiUser from "@/services/apiUser";

export const getUserStorage = () => JSON.parse(localStorage.getItem('user'));

export const setLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};
export const deleteLocalStorage = () => localStorage.removeItem('user');


export const getHeaderToken = () => apiUser.defaults.headers.Authorization;
export const deleteHeaderToken = () => delete apiUser.defaults.headers.Authorization;

export const setHeaderToken = (token) => {apiUser.defaults.headers.Authorization = `Bearer ${token}`; };