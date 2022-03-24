import axios from 'axios'

const apiWallet = axios.create({
  baseURL: 'http://localhost:3080',
})

export default apiWallet