import axios from 'axios'

const api = axios.create({
  baseURL: 'https://patient-qa.cloudsabin.com',
})

export default api
