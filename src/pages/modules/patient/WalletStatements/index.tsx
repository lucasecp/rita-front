import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import { useLoading } from '@/hooks/useLoading'
import { ReactComponent as EyeOpenedIcon } from '@/assets/icons/eye-opened.svg'
import { ReactComponent as EyeClosedIcon } from '@/assets/icons/eye-closed.svg'
import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import {
  Container,
  TableColumnDetails,
  TableColumnStatus,
  TableColumnAmount,
} from './styles'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Select } from '@/components/Form/Select'
import { Table } from '@/components/Table'

const periodOptions = [
  { label: '7 dias', value: 1 },
  { label: '15 dias', value: 2 },
  { label: '30 dias', value: 3 },
]

function convertPriceToCrownValue(amount: number, currency?: string) {
  // @TODO: implement currency
  return amount * 100
}

export const WalletStatements: React.FC = () => {
  const tableItems = useRef<any>()
  const [items, setItems] = useState<RitaWallet.PaymentRequest[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState(1)
  const [tableItemsSort, setTableItemsSort] = useState({})
  const { Loading } = useLoading()

  async function fetchData() {
    const { data } = await apiWallet.get<RitaWallet.PaymentRequest[]>('/payment', {
      params: {
        take: 10,
      },
    })

    if (!data || !Array.isArray(data)) {
      throw new Error('Resposta inválida')
    }

    setItems(data)
  }

  function handleItemsShowDetailsClick(index: number) {
    tableItems.current?.toggleExpand(index)
  }

  useEffect(() => {
    Loading.turnOn()
    fetchData()
      .catch(console.error)
      .finally(() => {
        Loading.turnOff()
      })
  }, [])

  useEffect(() => {
    console.log('effect selectedPeriod', selectedPeriod)
    // @TODO: api.get payments
  }, [selectedPeriod])

  useEffect(() => {
    console.log('effect tableItemsSort', tableItemsSort)
    // @TODO: api.get payments
  }, [tableItemsSort])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        <header>
          <h3>Todos os pagamentos</h3>
          <Select
            options={periodOptions}
            value={selectedPeriod}
            setValue={setSelectedPeriod}
          />
        </header>

        <Table
          ref={tableItems}
          columns={[
            {
              path: 'id',
              fit: true,
              custom: (_, index, isExpanded) => (
                <TableColumnDetails
                  onClick={() => handleItemsShowDetailsClick(index)}
                >
                  {isExpanded ? (
                    <>
                      <EyeClosedIcon /> <span>Ocultar detalhes</span>
                    </>
                  ) : (
                    <>
                      <EyeOpenedIcon /> <span> Exibir detalhes</span>
                    </>
                  )}
                </TableColumnDetails>
              ),
            },
            {
              path: 'createdAt',
              custom: (row) => (
                <>{moment(row.createdAt).format('DD/MM/YYYY')}</>
              ),
            },
            { path: 'typeTransaction.name' },
            {
              path: 'situation',
              custom: (row) => (
                <TableColumnStatus name={row.situation}>
                  {String(row.situation).toUpperCase() === 'NEW'
                    ? 'Aberto'
                    : String(row.situation).toUpperCase() === 'OK'
                    ? 'Realizado'
                    : row.situation}
                </TableColumnStatus>
              ),
            },
            {
              path: 'debitAmount',
              fit: true,
              custom: (row) => (
                <TableColumnAmount>
                  {formatPrice(row.debitAmount)}
                  <small>
                    <CrownIcon /> {convertPriceToCrownValue(row.debitAmount)}
                  </small>
                </TableColumnAmount>
              ),
            },
          ]}
          headers={[
            { path: 'id', label: 'Detalhes', sortable: false },
            { path: 'createdAt', label: 'Data', sortable: true },
            {
              path: 'typeTransaction.name',
              label: 'Operação',
              sortable: true,
            },
            { path: 'situation', label: 'Status', sortable: true },
            { path: 'debitAmount', label: 'Valor', sortable: true },
          ]}
          childRow={(row) => <div>{row.description}</div>}
          data={items}
          sort={tableItemsSort}
          onSort={setTableItemsSort}
        />
      </Container>
    </DefaultLayout>
  )
}
