import React, { useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { DialogLayout } from '@/components/Dialog/Layout'
import { WalletCreditCard } from '@/pages/Wallet/components/CreditCard'

import { ReactComponent as WalletCircleIcon } from '@/assets/icons/wallet-circle.svg'
import { ReactComponent as RectangleIcon } from '@/assets/icons/rectangle.svg'
import { ReactComponent as PixLogo } from '@/assets/logo/pix.svg'
import {
  MessageContainer, SelectPaymentOptions, SelectPaymentOptionCreditCard,
  SelectPaymentOptionPix
} from './styles'
import { WalletPatientBuyCoinInputSimple } from './input-simple'
import { WalletPatientBuyCoinSelectCreditCard } from './select-credit-card'
import { WalletPatientBuyCoinPayPix } from './pay-pix'

type WalletPatientBuyCoinSelectPaymentProps = {
  value: number
}

export const WalletPatientBuyCoinSelectPayment: React.FC<
  WalletPatientBuyCoinSelectPaymentProps
> = ({ value }) => {
  const { showMessage } = useModal()
  const [selectedOption, setSelectedOption] = useState('')
  const [hasError, setHasError] = useState(false)
  const { Loading } = useLoading()

  function handleSelectPaymentOptionClick(option: string) {
    setSelectedOption(option)
    setHasError(false)
  }

  function handleBackClick() {
    showMessage(WalletPatientBuyCoinInputSimple, {}, true)
  }

  function handleForwardClick() {
    if (selectedOption) {
      // @TODO: switch modals between credit card and pix
      console.log('handleForwardClick', value, selectedOption)
      if (selectedOption === 'credit') {
        showMessage(WalletPatientBuyCoinSelectCreditCard, {}, true)
      } else {
        Loading.turnOn()

        // @TODO: api.post buy coin by pix
        setTimeout(() => {
          Loading.turnOff()
          showMessage(WalletPatientBuyCoinPayPix, {}, true)
        }, 3000)
      }
    } else {
      setHasError(true)
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
        <MessageContainer>
          <section>
            <SelectPaymentOptions>
              <WalletCreditCard
                number="1234.5678.9012.3456"
                lastFourDigits="3456"
                name="Fulano da silva"
                expirationDate="09/25"
                onClick={() => handleSelectPaymentOptionClick('credit')}
              />
              <SelectPaymentOptionCreditCard
                className={selectedOption === 'credit' ? ' active' : ''}
                onClick={() => handleSelectPaymentOptionClick('credit')}
              >
                <h4>Cartão de crédito</h4>
                <RectangleIcon />
              </SelectPaymentOptionCreditCard>
              <SelectPaymentOptionPix
                className={selectedOption === 'pix' ? ' active' : ''}
                onClick={() => handleSelectPaymentOptionClick('pix')}
              >
                <PixLogo />
              </SelectPaymentOptionPix>
              {hasError && <p>Por favor, selecione uma forma de pagamento.</p>}
            </SelectPaymentOptions>
          </section>
        </MessageContainer>
      }
      footer={
        <>
          <OutlineButton onClick={handleBackClick}>Voltar</OutlineButton>
          <ButtonPrimary onClick={handleForwardClick}>Avançar</ButtonPrimary>
        </>
      }
    />
  )
}
