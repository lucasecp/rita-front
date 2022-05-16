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
    let output = new Error('Ocorreu um erro na requisição')

    if (axios.isAxiosError(error) && error.response?.data) {
      const { data, status } = error.response

      if (data?.message) {
        switch (status) {
          case 404: {
            output = data.message
            break
          }

          default: {
            output.message += `: ${data.message}`
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

export function getCallerId(): string {
  return '31C48912-7EBA-EC11-AAE9-02944D6C834B'
}
