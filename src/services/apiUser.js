import axios from 'axios'

const apiUser = axios.create({
  baseURL: 'https://user-qa.cloudsabin.com',
})

export default apiUser