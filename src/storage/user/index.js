import apiPatient from '@/services/apiPatient'
import apiUser from '@/services/apiUser'

export const getUserStorage = () => JSON.parse(localStorage.getItem('user'))

export const setLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload))
}
export const deleteLocalStorage = () => localStorage.removeItem('user')

export const deleteHeaderToken = () => {
  delete apiUser.defaults.headers.token
  delete apiPatient.defaults.headers.token
}

export const setHeaderToken = (token) => {
  apiUser.defaults.headers.token = token
  apiPatient.defaults.headers.token = token
}
