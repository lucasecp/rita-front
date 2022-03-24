import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
// import { ReactComponent as FileIcon } from '@/assets/icons/file.svg'
// import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down3.svg'
// import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up.svg'
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
import ButtonPrimary from '@/components/Button/Primary'
import PaymentRequest from '@/pages/Initial/messages/PaymentRequest'
import { Table } from '@/components/Table'

function convertPriceToCrownValue(amount: number, currency?: string) {
  // @TODO: implement currency
  return amount * 100
}

export const WalletPayments: React.FC = () => {
  const periodOptions = [
    { label: '7 dias', value: 1 },
    { label: '15 dias', value: 2 },
    { label: '30 dias', value: 3 },
  ]
  const tablePaymentsNew = useRef<any>()
  const tablePaymentsAll = useRef<any>()
  const [paymentsNew, setPaymentsNew] = useState<RitaWallet.PaymentRequest[]>([])
  const [paymentsAll, setPaymentsAll] = useState<RitaWallet.PaymentRequest[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState(1)
  const [tablePaymentsAllSort, setTablePaymentsAllSort] = useState({})
  const { showMessage } = useModal()
  const { Loading } = useLoading()

  async function fetchData() {
    const [{ data: loadedPaymentsNew }, { data: loadedPaymentsAll }] =
      await Promise.all([
        apiWallet.get<RitaWallet.PaymentRequest[]>('/payment', {
          params: {
            take: 2,
            situation: 'NEW',
          },
        }),
        apiWallet.get<RitaWallet.PaymentRequest[]>('/payment', {
          params: {
            take: 10,
          },
        }),
      ])

    if (Array.isArray(loadedPaymentsNew)) {
      setPaymentsNew(loadedPaymentsNew)
    }

    if (Array.isArray(loadedPaymentsAll)) {
      setPaymentsAll(loadedPaymentsAll)
    }
  }

  function handlePayNowClick(data: RitaWallet.PaymentRequest) {
    showMessage(PaymentRequest, { data }, true)
  }

  function handlePaymentsNewShowDetailsClick(index: number) {
    tablePaymentsNew.current?.toggleExpand(index)
  }

  function handlePaymentsAllShowDetailsClick(index: number) {
    tablePaymentsAll.current?.toggleExpand(index)
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
    console.log('effect tablePaymentsAllSort', tablePaymentsAllSort)
    // @TODO: api.get payments
  }, [tablePaymentsAllSort])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        <section>
          <header>
            <h3>Pagamentos em aberto</h3>
          </header>

          <Table
            ref={tablePaymentsNew}
            columns={[
              {
                path: 'id',
                fit: true,
                custom: (_, index, isExpanded) => (
                  <TableColumnDetails
                    onClick={() => handlePaymentsNewShowDetailsClick(index)}
                  >
                    {isExpanded ? (
                      <>
                        <EyeClosedIcon /> <span>Ocultar detalhes</span>
                      </>
                    ) : (
                      <>
                        <EyeOpenedIcon /> <span>Exibir detalhes</span>
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
                custom: (row) => (
                  <TableColumnAmount>
                    {formatPrice(row.debitAmount)}
                    <small>
                      <CrownIcon /> {convertPriceToCrownValue(row.debitAmount)}
                    </small>
                  </TableColumnAmount>
                ),
              },
              {
                path: 'actions',
                fit: true,
                custom: (row) => (
                  <ButtonPrimary onClick={() => handlePayNowClick(row)}>
                    Pagar agora
                  </ButtonPrimary>
                ),
              },
            ]}
            childRow={(row) => <div>{row.description}</div>}
            data={paymentsNew}
          />
        </section>

        <section>
          <header>
            <h3>Todos os pagamentos</h3>
            <Select
              options={periodOptions}
              value={selectedPeriod}
              setValue={setSelectedPeriod}
            />
          </header>

          <Table
            ref={tablePaymentsAll}
            columns={[
              {
                path: 'id',
                fit: true,
                custom: (_, index, isExpanded) => (
                  <TableColumnDetails
                    onClick={() => handlePaymentsAllShowDetailsClick(index)}
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
                label: 'Pagamento',
                sortable: true,
              },
              { path: 'situation', label: 'Status', sortable: true },
              { path: 'debitAmount', label: 'Valor', sortable: true },
            ]}
            childRow={(row) => <div>{row.description}</div>}
            data={paymentsAll}
            sort={tablePaymentsAllSort}
            onSort={setTablePaymentsAllSort}
          />
        </section>
      </Container>
    </DefaultLayout>
  )
}
