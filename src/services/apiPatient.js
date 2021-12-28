import axios from 'axios'

const apiPatient = axios.create({
  baseURL: process.env.REACT_APP_PATIENT_API_HOST,
})

export default apiPatient
