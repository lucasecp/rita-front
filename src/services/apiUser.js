import axios from 'axios'

const apiUser = axios.create({
  baseURL: process.env.REACT_APP_USER_API_HOST,
})

export default apiUser
