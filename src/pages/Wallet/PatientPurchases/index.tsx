import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import apiWallet, { getPaymentRequestSituation } from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import convertWalletMoneyToCrown from '@/helpers/convertWalletMoneyToCrown'
import { useModal } from '@/hooks/useModal'
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
import ButtonPrimary from '@/components/Button/Primary'
import { PaymentRequest } from '@/pages/Wallet/messages/PaymentRequest'
import { Table } from '@/components/Table'

const periodOptions = [
  { label: '7 dias', value: 7 },
  { label: '15 dias', value: 15 },
  { label: '30 dias', value: 30 },
]

export const WalletPatientPurchases: React.FC = () => {
  const tableItemsNew = useRef<any>()
  const tableItemsAll = useRef<any>()
  const [itemsNew, setItemsNew] = useState<
    RitaWallet.Model.PaymentRequest[]
  >([])
  const [itemsAll, setItemsAll] = useState<
    RitaWallet.Model.PaymentRequest[]
  >([])
  const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[0].value)
  const [tableItemsAllSort, setTableItemsAllSort] =
    useState<RitaComponents.TableSort>({
      path: 'createdAt',
      order: 'DESC',
    })
  const [tableItemsAllPaging, setTableItemsAllPaging] = useState({
    take: 10,
    skip: 0,
  })
  const [tableItemsAllCount, setTableItemsAllCount] = useState(0)
  const { showMessage } = useModal()
  const { Loading } = useLoading()

  function handlePayNowClick(data: RitaWallet.Model.PaymentRequest) {
    showMessage(PaymentRequest, { data }, true)
  }

  function handleItemsNewShowDetailsClick(index: number) {
    tableItemsNew.current?.toggleExpand(index)
  }

  function handleItemsAllShowDetailsClick(index: number) {
    tableItemsAll.current?.toggleExpand(index)
  }

  useEffect(() => {
    async function fetchDataActive() {
      const { data } = await apiWallet.get<RitaWallet.Model.PaymentRequest[]>(
        '/payment',
        {
          params: {
            take: 2,
            activeOnly: true,
          },
        },
      )

      if (Array.isArray(data)) {
        setItemsNew(data)
      }
    }

    Loading.turnOn()
    fetchDataActive()
      .catch(console.error)
      .finally(() => {
        Loading.turnOff()
      })
  }, [])

  useEffect(() => {
    async function fetchDataAll() {
      const { data } = await apiWallet.get<RitaWallet.Model.PaymentRequest[]>(
        '/payment',
        {
          params: {
            take: tableItemsAllPaging.take,
            skip: tableItemsAllPaging.skip,
            orderBy: tableItemsAllSort.path,
            orderType: tableItemsAllSort.order,
            daysBefore: selectedPeriod,
          },
        },
      )

      if (Array.isArray(data)) {
        setItemsAll(data)
        setTableItemsAllCount(100)
      }
    }

    Loading.turnOn()
    fetchDataAll()
      .catch(console.error)
      .finally(() => {
        Loading.turnOff()
      })
  }, [selectedPeriod, tableItemsAllSort, tableItemsAllPaging])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        {itemsNew && itemsNew.length > 0 && (
          <section>
            <header>
              <h3>Compras em aberto</h3>
            </header>

            <Table
              ref={tableItemsNew}
              columns={[
                {
                  path: 'id',
                  custom: (_, index, isExpanded) => (
                    <TableColumnDetails
                      onClick={() => handleItemsNewShowDetailsClick(index)}
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
                { path: 'transactionType' },
                {
                  path: 'debitAmount',
                  custom: (row) => (
                    <TableColumnAmount>
                      {formatPrice(row.debitAmount)}
                      <small>
                        <CrownIcon /> {convertWalletMoneyToCrown(row.debitAmount)}
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
              data={itemsNew}
              hidePagination={true}
            />
          </section>
        )}

        <section>
          <header>
            <h3>Todos as compras</h3>
            <Select
              options={periodOptions}
              value={selectedPeriod}
              setValue={setSelectedPeriod}
            />
          </header>

          <Table
            ref={tableItemsAll}
            columns={[
              {
                path: 'id',
                custom: (_, index, isExpanded) => (
                  <TableColumnDetails
                    onClick={() => handleItemsAllShowDetailsClick(index)}
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
              { path: 'transactionType' },
              {
                path: 'situation',
                custom: (row) => (
                  <TableColumnStatus name={row.situation}>
                    {getPaymentRequestSituation(row.situation)}
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
                      <CrownIcon /> {convertWalletMoneyToCrown(row.debitAmount)}
                    </small>
                  </TableColumnAmount>
                ),
              },
            ]}
            headers={[
              { path: 'id', label: 'Detalhes', sortable: false },
              { path: 'createdAt', label: 'Data', sortable: true },
              {
                path: 'transactionType',
                label: 'Pagamento',
                sortable: true,
              },
              { path: 'situation', label: 'Status', sortable: true },
              { path: 'debitAmount', label: 'Valor', sortable: true },
            ]}
            childRow={(row) => <div>{row.description}</div>}
            data={itemsAll}
            sort={tableItemsAllSort}
            count={tableItemsAllCount}
            onSort={setTableItemsAllSort}
            onPaginate={setTableItemsAllPaging}
          />
        </section>
      </Container>
    </DefaultLayout>
  )
}
