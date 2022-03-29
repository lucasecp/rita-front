import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import { useLoading } from '@/hooks/useLoading'
import { ReactComponent as EyeOpenedIcon } from '@/assets/icons/eye-opened.svg'
import { ReactComponent as EyeClosedIcon } from '@/assets/icons/eye-closed.svg'
import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down3.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up.svg'
import {
  Container,
  TableColumnDetails,
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
  const [tableItemsSort, setTableItemsSort] = useState<RitaComponents.TableSort>({
    path: 'createdAt',
    order: 'DESC',
  })
  const [tableItemsPaging, setTableItemsPaging] = useState({
    take: 10,
    skip: 0,
  })
  const [tableItemsCount, setTableItemsCount] = useState(0)
  const { Loading } = useLoading()

  async function fetchData() {
    const { data } = await apiWallet.get<RitaWallet.PaymentRequest[]>('/payment', {
      params: {
        take: tableItemsPaging.take,
        skip: tableItemsPaging.skip,
        orderBy: tableItemsSort.path,
        orderType: tableItemsSort.order,
        period: selectedPeriod,
      },
    })

    if (!data || !Array.isArray(data)) {
      throw new Error('Resposta inválida')
    }

    setItems(data)
    setTableItemsCount(50)
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
    Loading.turnOn()
    fetchData()
      .catch(console.error)
      .finally(() => {
        Loading.turnOff()
      })
  }, [selectedPeriod, tableItemsSort, tableItemsPaging])

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
              path: 'debitAmount',
              fit: true,
              custom: (row) => (
                <TableColumnAmount>
                  <span>{formatPrice(row.debitAmount)}</span>
                  <small>
                    <CrownIcon /> {convertPriceToCrownValue(row.debitAmount)}
                  </small>
                  {String(row.typeTransaction.mode).toUpperCase() === 'DEBIT' &&
                    <ArrowUpIcon className="debit" />}
                  {String(row.typeTransaction.mode).toUpperCase() === 'CREDIT' &&
                    <ArrowDownIcon className="credit" />}
                  {String(row.typeTransaction.mode).toUpperCase() === 'CASHBACK' &&
                    <ArrowDownIcon />}
                </TableColumnAmount>
              ),
            }
          ]}
          headers={[
            { path: 'id', label: 'Detalhes', sortable: false },
            { path: 'createdAt', label: 'Data', sortable: true },
            {
              path: 'typeTransaction.name',
              label: 'Operação',
              sortable: true,
            },
            { path: 'debitAmount', label: 'Valor', sortable: true },
          ]}
          childRow={(row) => <div>{row.description}</div>}
          data={items}
          sort={tableItemsSort}
          count={tableItemsCount}
          onSort={setTableItemsSort}
          onPaginate={setTableItemsPaging}
        />
      </Container>
    </DefaultLayout>
  )
}
