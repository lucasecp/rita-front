import React, { useState, useEffect } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import moment from 'moment'

// import apiWallet from '@/services/apiWallet'
import { useLoading } from '@/hooks/useLoading'
import { OPERATOR_WALLET_TABLE_IMPORT_CREATE } from '@/routes/constants/namedRoutes/routes'

import { ReactComponent as ExclamationCircleIcon } from '@/assets/icons/exclamation-circle.svg'
import { ReactComponent as EyeIcon } from '@/assets/icons/eye-opened.svg'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Table } from '@/components/Table'
import ButtonPrimary from '@/components/Button/Primary'
import { Container, NoRecordsWarn } from './styles'

export const WalletOperatorTableImportList: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([])
  const [tableSort, setTableSort] = useState<RitaComponents.TableSort>({
    path: 'createdAt',
    order: 'DESC',
  })
  const [tablePaging, setTablePaging] = useState({
    take: 10,
    skip: 0,
  })
  const [tableCount, setTableCount] = useState(0)
  const { Loading } = useLoading()
  const history = useHistory()

  function handleNewTableClick() {
    history.push(OPERATOR_WALLET_TABLE_IMPORT_CREATE)
  }

  useEffect(() => {
    async function fetchData() {
      // const { data } = await apiWallet.get<any[]>(
      //   '/payment',
      //   {
      //     params: {
      //       take: tablePaging.take,
      //       skip: tablePaging.skip,
      //       orderBy: tableSort.path,
      //       orderType: tableSort.order,
      //     },
      //   },
      // )
      const data = []

      if (Math.random() < 0.5) {
        data.push({
          id: 1,
          tableType: 'Particular',
          regional: 'Regional',
          createdAt: '2022-02-10T10:10:10',
        })
      }

      if (Array.isArray(data)) {
        setTableData(data)
        setTableCount(100)
      }
    }

    Loading.turnOn()
    fetchData()
      .catch(console.error)
      .finally(() => {
        Loading.turnOff()
      })
  }, [tableSort, tablePaging])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        <h3>
          Importação de Tabelas
          {tableData && tableData.length > 0 && (
            <ButtonPrimary medium onClick={handleNewTableClick}>
              Nova Tabela
            </ButtonPrimary>
          )}
        </h3>

        {tableData && tableData.length ? (
          <Table
            columns={[
              { path: 'tableType' },
              { path: 'regional' },
              {
                path: 'createdAt',
                custom: (row) => (
                  <>{moment(row.createdAt).format('DD/MM/YYYY')}</>
                ),
              },
              {
                path: 'actions',
                fit: true,
                custom: (row) => (
                  <>
                    <NavLink to={OPERATOR_WALLET_TABLE_IMPORT_CREATE}>
                      <EyeIcon title="Visualizar" />
                    </NavLink>
                  </>
                ),
              },
            ]}
            headers={[
              { path: 'tableType', label: 'Tipo Tabela', sortable: false },
              { path: 'regional', label: 'Regional', sortable: false },
              {
                path: 'createdAt',
                label: 'Data da importação',
                sortable: true,
              },
              { path: 'actions', label: 'Ações', sortable: true },
            ]}
            data={tableData}
            sort={tableSort}
            count={tableCount}
            onSort={setTableSort}
            onPaginate={setTablePaging}
          />
        ) : (
          <NoRecordsWarn>
            <ExclamationCircleIcon />
            <p>Ainda não existem Tabelas Importadas no sistema.</p>
            <div>
              <ButtonPrimary onClick={handleNewTableClick}>
                Nova Tabela
              </ButtonPrimary>
            </div>
          </NoRecordsWarn>
        )}
      </Container>
    </DefaultLayout>
  )
}
