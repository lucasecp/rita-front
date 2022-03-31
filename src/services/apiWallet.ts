import axios from 'axios'

enum PaymentRequestSituation {
  NEW = 'Aberto',
  OK = 'Realizado',
  EXPIRED = 'Expirado',
  REJECTED = 'Rejeitado',
  WAITING = 'Pendente'
}

const apiWallet = axios.create({
  baseURL: process.env.REACT_APP_WALLET_API_URL,
})

const lsUser = localStorage.getItem('user')

if (lsUser) {
  const user = JSON.parse(lsUser) as { token?: string }
  apiWallet.defaults.headers.token = user.token
}

export default apiWallet

export function getPaymentRequestSituation(id: string): string {
  const formattedID = String(id).toUpperCase() as RitaWallet.PaymentRequestSituation
  return PaymentRequestSituation[formattedID] || formattedID
}
