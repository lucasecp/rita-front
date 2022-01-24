import axios from 'axios'

const apiPatient = axios.create({
  baseURL: process.env.REACT_APP_PATIENT_API_HOST,
})

const user = JSON.parse(localStorage.getItem('user'))

apiPatient.defaults.headers.token = user?.token

export default apiPatient
