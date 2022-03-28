import React from 'react'

import { useModal } from '@/hooks/useModal'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import ButtonPrimary from '@/components/Button/Primary'

import { WalletBuyCoinInputSimple } from './input-simple'

export const WalletBuyCoin: React.FC = () => {
  const { showMessage } = useModal()

  function handleBuyCoinClick() {
    showMessage(WalletBuyCoinInputSimple, {}, true)
  }

  return (
    <DefaultLayout title="Carteira Digital">
      <ButtonPrimary onClick={handleBuyCoinClick}>
        Comprar moeda
      </ButtonPrimary>
    </DefaultLayout>
  )
}
