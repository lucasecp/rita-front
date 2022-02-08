import axios from 'axios'

const apiAdmin = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_API_HOST,
})

const user = JSON.parse(localStorage.getItem('user'))

apiAdmin.defaults.headers.token = user?.token

export default apiAdmin
