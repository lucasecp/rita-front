import React, { useRef, useState, useEffect } from 'react'
import moment from 'moment'

import { Container, ListNav, ListItem } from './styles'

import { ReactComponent as WalletIcon } from '@/assets/icons/wallet.svg'
import { ReactComponent as StethoscopeIcon } from '@/assets/icons/stethoscope2.svg'
import { ReactComponent as SyringeIcon } from '@/assets/icons/syringe.svg'
import { ReactComponent as FlaskIcon } from '@/assets/icons/flask.svg'
import { ReactComponent as MoneyDownIcon } from '@/assets/icons/money-down.svg'
import { ReactComponent as MoneyUpIcon } from '@/assets/icons/money-up.svg'
import { ReactComponent as ChevronCircleLeftIcon } from '@/assets/icons/chevron-circle-left.svg'
import { ReactComponent as ChevronCircleRightIcon } from '@/assets/icons/chevron-circle-right.svg'

import formatPrice from '@/helpers/formatPrice'

const availableTypes = {
  paymentAppointment: {
    icon: <StethoscopeIcon />,
    text: 'Pagamento de Consulta',
  },
  paymentVaccine: {
    icon: <SyringeIcon />,
    text: 'Pagamento de Vacinas',
  },
  paymentExam: {
    icon: <FlaskIcon />,
    text: 'Pagamento de Exames',
  },
  cashback: {
    icon: <MoneyDownIcon />,
    text: 'Cashback',
  },
  coinBuy: {
    icon: <MoneyDownIcon />,
    text: 'Compra de Moeda',
  },
  withdraw: {
    icon: <MoneyUpIcon />,
    text: 'Saque',
  },
}

export const LastStatementList: React.FC = () => {
  const scrollRef = useRef<HTMLElement>(null)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    // @TODO: api.get last statements
    const loadedItems = [
      {
        id: 1,
        type: 'paymentAppointment',
        value: 53,
        date: moment().subtract(1, 'day').toISOString(true),
        origin: 'Origem do pedido',
      },
      {
        id: 2,
        value: 10.55,
        type: 'withdraw',
        date: moment().subtract(1, 'day').toISOString(true),
        origin: 'Pix',
      },
      {
        id: 3,
        value: 125,
        type: 'paymentVaccine',
        date: moment().subtract(2, 'day').toISOString(true),
        origin: 'Origem do pedido',
      },
      {
        id: 4,
        value: 33.33,
        type: 'cashback',
        date: moment().subtract(3, 'day').toISOString(true),
        origin: 'Vacinas',
      },
      {
        id: 5,
        value: 250,
        type: 'paymentExam',
        date: moment().subtract(4, 'day').toISOString(true),
        origin: 'Origem do pedido',
      },
      {
        id: 6,
        value: 125.3,
        type: 'coinBuy',
        date: moment().subtract(5, 'day').toISOString(true),
        origin: 'Carteira digital',
      },
    ]

    setItems(loadedItems)
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
          {items.map((statement, index) => {
            const type =
              availableTypes[statement.type as keyof typeof availableTypes]
            const active = Boolean(Math.floor(Math.random() * 2))

            return (
              <ListItem key={index} active={active}>
                <em>{type?.icon || <WalletIcon />}</em>
                <h3>{formatPrice(statement.value)}</h3>
                <span>{moment(statement.date).format('DD/MM/YYYY')}</span>
                <div>
                  <h4>{type?.text || statement.type}</h4>
                  <p>{statement.origin}</p>
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
