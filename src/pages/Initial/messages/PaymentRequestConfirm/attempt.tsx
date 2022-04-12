import React from 'react'

import { useModal } from '@/hooks/useModal'
import ButtonPrimary from '@/components/Button/Primary'
import { PaymentRequestConfirm } from '.'

import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { Container } from './styles'

export const PaymentRequestAccessAttempt: React.FC<{
  data: RitaWallet.PaymentRequest
  counter?: number
}> = ({ data, counter = 0 }) => {
  const { showMessage } = useModal()

  function handlerTryAgainClick() {
    showMessage(PaymentRequestConfirm, { data })
  }

  return (
    <Container variant="danger">
      <header>
        <TimesCircleIcon />
      </header>

      <section>
        <p>
          A senha digitada é inválida.
          <br />
          Você tem ainda {counter} tentativa{counter > 1 ? 's' : ''}.
        </p>
      </section>

      <footer>
        <ButtonPrimary onClick={handlerTryAgainClick}>
          Tente Novamente
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
