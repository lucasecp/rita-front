import axios from 'axios'

const apiUser = axios.create({
  baseURL: process.env.REACT_APP_USER_API_HOST,
})

const user = JSON.parse(localStorage.getItem('user'))

apiUser.defaults.headers.token = user?.token

export default apiUser
