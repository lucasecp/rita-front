import React from 'react'

import { useModal } from '@/hooks/useModal'
import ButtonPrimary from '@/components/Button/Primary'
import { DialogLayout } from '@/components/Dialog/Layout'
import { WalletCreditCard } from '@/pages/Wallet/components/CreditCard'

import { ReactComponent as WalletCircleIcon } from '@/assets/icons/wallet-circle.svg'
import { toast } from '@/styles/components/toastify'

export const WalletPatientBuyCoinSelectCreditCard: React.FC = () => {
  const { closeModal } = useModal()

  function handlePayment() {
    closeModal()

    if (Math.random() < 0.5) {
      toast.success('Pagamento agendado com sucesso')
    } else {
      toast.error('Pagamento agendado com sucesso')
    }
  }

  return (
    <DialogLayout
      header={
        <>
          <WalletCircleIcon />
          <h3>Como deseja pagar?</h3>
        </>
      }
      body={
        <WalletCreditCard
          number="1234.5678.9012.3456"
          lastFourDigits="3456"
          name="Fulano da silva"
          expirationDate="09/25"
          onClick={() => handlePayment()}
        />
      }
      footer={
        <>
          <ButtonPrimary>Cadastrar cartão</ButtonPrimary>
        </>
      }
    />
  )
}
