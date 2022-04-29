import axios from 'axios'

enum PaymentRequestSituation {
  NEW = 'Aberto',
  OK = 'Realizado',
  EXPIRED = 'Expirado',
  REJECTED = 'Rejeitado',
  WAITING = 'Pendente',
}

const apiWallet = axios.create({
  baseURL: process.env.REACT_APP_WALLET_API_URL,
  timeout: 30000,
})

apiWallet.interceptors.request.use(
  (config) => {
    const lsUser = localStorage.getItem('user')
    const { headers = {} } = config

    if (lsUser) {
      const user = JSON.parse(lsUser) as { token?: string }

      if (user.token) {
        headers.Authorization = `Bearer ${user.token}`
        headers.token = user.token
        headers['x-access-token'] = user.token
      }
    }

    return config
  },
  (error) => Promise.reject(error),
)

apiWallet.interceptors.response.use(
  (response) => response,
  (error) => {
    let output = new Error('Ocorreu um erro na requisição.')

    if (axios.isAxiosError(error) && error.response?.data) {
      const { data, status } = error.response

      switch (status) {
        case 404: {
          if (data && data.message) {
            output = data.message
          }
        }
      }
    }

    return output instanceof Error ? Promise.reject(output) : output
  },
)

export default apiWallet

export function getPaymentRequestSituation(id: string): string {
  const formattedID = String(
    id,
  ).toUpperCase() as RitaWallet.Enum.PaymentRequestSituation
  return PaymentRequestSituation[formattedID] || formattedID
}
