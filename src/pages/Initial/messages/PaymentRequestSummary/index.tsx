import React from 'react'
import moment from 'moment'

import formatPrice from '@/helpers/formatPrice'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { PaymentRequestConfirm } from '@/pages/Initial/messages/PaymentRequestConfirm'
import { PaymentRequestRejection } from '@/pages/Initial/messages/PaymentRequestRejection'

import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { Container } from './styles'

type PaymentRequestSummaryProps = {
  data: RitaWallet.Model.PaymentRequest
  items: RitaWallet.Model.PaymentRequestItem[]
}

export const PaymentRequestSummary: React.FC<PaymentRequestSummaryProps> = ({
  data,
  items,
}) => {
  const { showMessage } = useModal()

  function handleRejectClick() {
    showMessage(PaymentRequestRejection, { data }, true)
  }

  function handleConfirmPaymentClick() {
    showMessage(PaymentRequestConfirm, { data }, true)
  }

  return (
    <Container>
      <header>
        <h3>Resumo do Pedido</h3>
      </header>

      <section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Valor Unitário</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, index) => (
              <tr key={index}>
                <td>{row.description}</td>
                <td>{row.quantity}</td>
                <td className="price">
                  <small>{formatPrice(row.originalPrice)}</small>
                  {formatPrice(row.discountPrice)}
                  <small>
                    (<CrownIcon /> {row.discountPrice * 100})
                  </small>
                </td>
                <td className="price total">
                  <small>{formatPrice(row.originalPrice)}</small>
                  {formatPrice(row.discountPrice)}
                  <small>
                    (<CrownIcon /> {row.discountPrice * 100})
                  </small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer>
        <OutlineButton onClick={handleRejectClick}>
          Não reconheço essa compra
        </OutlineButton>
        <ButtonPrimary onClick={handleConfirmPaymentClick}>
          Confirmar
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
