import React, { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import convertWalletMoneyToCrown from '@/helpers/convertWalletMoneyToCrown'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { PaymentRequestSummary } from '@/pages/Wallet/messages/PaymentRequestSummary'
import { PaymentRequestRejection } from '@/pages/Wallet/messages/PaymentRequestRejection'

import warning from '@/assets/icons/alert-circle.svg'
import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { Container, BodyAmountToPay } from './styles'

const defaultMaximumAttempts = 3

type PaymentRequestProps = {
  data: RitaWallet.Model.PaymentRequest
}

export const PaymentRequest: React.FC<PaymentRequestProps> = ({
  data: paymentRequest,
}) => {
  const { showMessage } = useModal()
  const [, setRemaingAttempts] = useLocalStorage(
    '@Rita/PaymentRequest/RemaingAttempts',
    null,
  )

  useEffect(() => {
    setRemaingAttempts(defaultMaximumAttempts)
  }, [])

  function handleRejectClick() {
    showMessage(PaymentRequestRejection, { data: paymentRequest }, true)
  }

  async function handlePayClick() {
    const { data } = await apiWallet.get<RitaWallet.Model.PaymentRequestItem[]>(
      `/payment/id/${paymentRequest.id}/item`,
    )

    if (!Array.isArray(data)) {
      throw new Error('Data is invalid')
    }

    showMessage(
      PaymentRequestSummary,
      { data: paymentRequest, items: data },
      true,
    )
  }

  return (
    <Container>
      <header>
        <img src={warning} />
      </header>

      <section>
        <h3>Pedido de Pagamento</h3>
        <p>{paymentRequest.description}</p>

        <BodyAmountToPay>
          {/* <small>De <del><strong>{formatPrice(paymentRequest.debitAmount)}</strong></del> por</small> */}
          <span>
            <strong>{formatPrice(paymentRequest.debitAmount)}</strong>{' '}
            <small>
              (
              <CrownIcon />
              {convertWalletMoneyToCrown(paymentRequest.debitAmount)})
            </small>
            <br />
            pagando com Rita Saúde
          </span>
        </BodyAmountToPay>
      </section>

      <footer>
        <OutlineButton onClick={handleRejectClick}>
          Não reconheço essa compra
        </OutlineButton>
        <ButtonPrimary onClick={handlePayClick}>Pagar</ButtonPrimary>
      </footer>
    </Container>
  )
}
