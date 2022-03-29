import React, { useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import { useModal } from '@/hooks/useModal'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import PaymentRequest from '@/pages/Initial/messages/PaymentRequest'
import { CustomerSatisfaction } from '@/pages/Initial/messages/CustomerSatisfaction'

import { Balances } from './components/Balances'
import { LastStatementList } from './components/LastStatementList'
import { Consumption } from './components/Consumption'
import { Container } from './styles'

export const WalletDashboard: React.FC = () => {
  const { showMessage } = useModal()

  useEffect(() => {
    async function fetchData() {
      const { data: dataPaymentRequests } = await apiWallet.get<
        RitaWallet.PaymentRequest[]
      >('/payment', {
        params: {
          take: 1,
          situation: 'NEW',
        },
      })

      if (Array.isArray(dataPaymentRequests) && dataPaymentRequests.length) {
        showMessage(PaymentRequest, { data: dataPaymentRequests[0] }, true)
      } else {
        const { data } = await apiWallet.get<RitaWallet.CSAT[]>('/csat')

        if (data && Array.isArray(data) && data.length) {
          showMessage(CustomerSatisfaction, { data: data[0] }, true)
        }
      }
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        <Balances />
        <LastStatementList />
        <Consumption />
      </Container>
    </DefaultLayout>
  )
}
