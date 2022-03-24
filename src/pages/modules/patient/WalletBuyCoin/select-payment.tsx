
import React, { useState } from 'react'

import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { ReactComponent as RectangleIcon } from '@/assets/icons/rectangle.svg'
import { ReactComponent as CopyIcon } from '@/assets/icons/copy.svg'
import { MessageContainer, SelectPaymentOptions } from './styles'
import { WalletBuyCoinInputSimple } from './input-simple'
import { WalletBuyCoinPayPix } from './pay-pix'

type WalletBuyCoinSelectPaymentProps = {
  value: number
}

export const WalletBuyCoinSelectPayment: React.FC<WalletBuyCoinSelectPaymentProps> = ({
  value,
}) => {
  const { showMessage } = useModal()
  const [selectedOption, setSelectedOption] = useState('')
  const [hasError, setHasError] = useState(false)

  function handleSelectPaymentOptionClick(option: string) {
    setSelectedOption(option)
    setHasError(false)
  }

  function handleBackClick() {
    showMessage(WalletBuyCoinInputSimple, {}, true)
  }

  function handleForwardClick() {
    if (selectedOption) {
      // @TODO: switch modals between credit card and pix
      // @TODO: api.post buy coin
      console.log('handleForwardClick', value, selectedOption)
      showMessage(WalletBuyCoinPayPix, {}, true)
    } else {
      setHasError(true)
    }
  }

  return (
    <MessageContainer>
      <header>
        <h3>Como deseja pagar?</h3>
      </header>

      <section>
        <SelectPaymentOptions>
          <div
            className={selectedOption === 'credit' ? 'active' : ''}
            onClick={() => handleSelectPaymentOptionClick('credit')}
          >
            <h4>Cartão de crédito</h4>
            <RectangleIcon />
          </div>

          <div
            className={`pix${selectedOption === 'pix' ? ' active' : ''}`}
            onClick={() => handleSelectPaymentOptionClick('pix')}
          >
            <h4>PIX</h4>
            <CopyIcon />
          </div>
          {hasError && <p>Por favor, selecione uma forma de pagamento.</p>}
        </SelectPaymentOptions>
      </section>

      <footer>
        <OutlineButton onClick={handleBackClick}>
          Voltar
        </OutlineButton>
        <ButtonPrimary onClick={handleForwardClick}>
          Avançar
        </ButtonPrimary>
      </footer>
    </MessageContainer>
  )
}
