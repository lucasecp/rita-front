import React, { useRef, useState, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'

import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
// import { ReactComponent as WalletIcon } from '@/assets/icons/wallet.svg'
// import { ReactComponent as StethoscopeIcon } from '@/assets/icons/stethoscope2.svg'
// import { ReactComponent as SyringeIcon } from '@/assets/icons/syringe.svg'
// import { ReactComponent as FlaskIcon } from '@/assets/icons/flask.svg'
// import { ReactComponent as MoneyDownIcon } from '@/assets/icons/money-down.svg'
// import { ReactComponent as MoneyUpIcon } from '@/assets/icons/money-up.svg'
import { ReactComponent as ChevronCircleLeftIcon } from '@/assets/icons/chevron-circle-left.svg'
import { ReactComponent as ChevronCircleRightIcon } from '@/assets/icons/chevron-circle-right.svg'
import { Container, ListNav, ListItem } from './styles'

// const availableTypes = {
//   paymentAppointment: {
//     icon: <StethoscopeIcon />,
//     text: 'Pagamento de Consulta',
//   },
//   paymentVaccine: {
//     icon: <SyringeIcon />,
//     text: 'Pagamento de Vacinas',
//   },
//   paymentExam: {
//     icon: <FlaskIcon />,
//     text: 'Pagamento de Exames',
//   },
//   cashback: {
//     icon: <MoneyDownIcon />,
//     text: 'Cashback',
//   },
//   coinBuy: {
//     icon: <MoneyDownIcon />,
//     text: 'Compra de Moeda',
//   },
//   withdraw: {
//     icon: <MoneyUpIcon />,
//     text: 'Saque',
//   },
// }

export const LastStatementList: React.FC = () => {
  const scrollRef = useRef<HTMLElement>(null)
  const [items, setItems] = useState<RitaWallet.Model.PaymentRequest[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiWallet.get<RitaWallet.Model.PaymentRequest>(
        '/payment/statement',
      )

      if (data && Array.isArray(data)) {
        setItems(data)
      }
    }

    fetchData().catch(console.error)
  }, [])

  function handleScroll(signal = 1) {
    if (scrollRef.current) {
      scrollRef.current.scroll({
        top: 0,
        left: scrollRef.current.scrollLeft + 100 * signal,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Container>
      <h2>Últimos Extratos</h2>
      <section ref={scrollRef}>
        <div>
          <ListNav position="start">
            <button type="button" onClick={() => handleScroll(-1)}>
              <ChevronCircleLeftIcon />
            </button>
          </ListNav>
          {items.map((item, index) => {
            let title = item.transactionType

            if (item.transactionMode === 'DEBIT') {
              if (item.transactionType === 'EXAM') {
                title = 'Pagamento de Exames'
              } else if (item.transactionType === 'APPOINTMENT') {
                title = 'Pagamento de Exames'
              }
            }

            return (
              <ListItem key={index} active={true}>
                <em>{<CrownIcon />}</em>
                <h3>{formatPrice(item.debitAmount)}</h3>
                <span>{moment(item.returnedAt).format('DD/MM/YYYY')}</span>
                <div>
                  <h4>{title}</h4>
                  <p>Origem do pedido</p>
                </div>
              </ListItem>
            )
          })}
          <ListNav position="end">
            <button type="button" onClick={() => handleScroll()}>
              <ChevronCircleRightIcon />
            </button>
          </ListNav>
        </div>
      </section>
    </Container>
  )
}
