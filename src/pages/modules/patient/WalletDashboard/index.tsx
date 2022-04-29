import React, { useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import { useModal } from '@/hooks/useModal'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PaymentRequest } from '@/pages/Initial/messages/PaymentRequest'
import { CustomerSatisfaction } from '@/pages/Initial/messages/CustomerSatisfaction'

import { Balances } from './components/Balances'
import { LastStatementList } from './components/LastStatementList'
import { Consumption } from './components/Consumption'
import { Container } from './styles'

export const WalletDashboard: React.FC = () => {
  const { showMessage } = useModal()

  useEffect(() => {
    async function fetchData() {
      const { data: dataPaymentRequest } =
        await apiWallet.get<RitaWallet.Model.PaymentRequest>('/payment/new')

      if (dataPaymentRequest) {
        showMessage(PaymentRequest, { data: dataPaymentRequest }, true)
      } else {
        const { data: dataCSAT } =
          await apiWallet.get<RitaWallet.API.Get.PaymentCSAT>('/payment/csat')

        if (dataCSAT) {
          showMessage(CustomerSatisfaction, { data: dataCSAT }, true)
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
