import React from 'react'

import formatPrice from '@/helpers/formatPrice'
import convertWalletMoneyToCrown from '@/helpers/convertWalletMoneyToCrown'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { WalletPatientBuyCoinInputCustom } from '@/pages/Wallet/PatientBuyCoin/input-custom'

import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { Container, ButtonGroup } from './styles'

type InsufficientBalanceProps = {
  walletBalance: number
  debitAmount: number
}

export const InsufficientBalance: React.FC<InsufficientBalanceProps> = ({
  walletBalance,
  debitAmount,
}) => {
  const { showMessage, closeModal } = useModal()
  const remaningAmount = debitAmount - walletBalance

  function handleCancelClick() {
    closeModal()
  }

  function handleBuyCoinClick() {
    showMessage(
      WalletPatientBuyCoinInputCustom,
      {
        walletBalance,
        initialValue: remaningAmount,
      },
      true,
    )
  }

  return (
    <Container>
      <TimesCircleIcon />
      <h3>Saldo insuficiente.</h3>
      <p>
        Você ainda precisa de{' '}
        <strong>
          {formatPrice(remaningAmount)}{' '}
          <small>
            (<CrownIcon />
            {convertWalletMoneyToCrown(remaningAmount)})
          </small>
        </strong>{' '}
        para realizar essa compra.
      </p>

      <ButtonGroup>
        <OutlineButton onClick={handleCancelClick}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={handleBuyCoinClick}>
          Comprar Moedas
        </ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
