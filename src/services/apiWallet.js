import axios from 'axios'

const apiWallet = axios.create({
  baseURL: process.env.REACT_APP_WALLET_API_URL,
})

const user = JSON.parse(localStorage.getItem('user'))

apiWallet.defaults.headers.token = user?.token

export default apiWallet
