import apiAdmin from '@/services/apiAdmin'
import apiPatient from '@/services/apiPatient'
import apiUser from '@/services/apiUser'
import apiWallet from '@/services/apiWallet'

export const getUserStorage = () => JSON.parse(localStorage.getItem('user'))

export const setUserLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload))
}

export const deleteLocalStorage = () => localStorage.clear()

export const deleteHeaderToken = () => {
  delete apiUser.defaults.headers.token
  delete apiPatient.defaults.headers.token
  delete apiAdmin.defaults.headers.token
  delete apiWallet.defaults.headers.token
}

export const setHeaderToken = (token) => {
  apiUser.defaults.headers.token = token
  apiPatient.defaults.headers.token = token
  apiAdmin.defaults.headers.token = token
  apiWallet.defaults.headers.token = token
}
