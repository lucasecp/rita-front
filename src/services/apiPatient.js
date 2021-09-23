import axios from 'axios'

const apiPatient = axios.create({
  baseURL: 'https://patient-qa.cloudsabin.com',
})

export default apiPatient