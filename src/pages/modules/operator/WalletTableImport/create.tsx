import React, { useState, useEffect } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

// import apiWallet from '@/services/apiWallet'
import { useLoading } from '@/hooks/useLoading'
import { OPERATOR_WALLET_TABLE_IMPORT_LIST } from '@/routes/constants/namedRoutes/routes'
import formatBytes from '@/helpers/formatBytes'
import formatPrice from '@/helpers/formatPrice'

import { toast } from '@/styles/components/toastify'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Select } from '@/components/Form/Select'
import { InputFile } from '@/components/Form/InputFile'
import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import { Table } from '@/components/Table'
import { Container, FormInputs, FormFileDetails, ActionButtons } from './styles'

export const WalletTableImportCreate: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'form' | 'table'>('form')
  const [selectedType, setSelectedType] = useState(1)
  const [selectedRegional, setSelectedRegional] = useState(1)
  const [file, setFile] = useState<File>()
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState(0)
  const [tableData, setTableData] = useState<any[]>([])
  const [tableSort, setTableSort] =
    useState<RitaComponents.TableSort>({
      path: 'description',
      order: 'DESC',
    })
  const [tablePaging, setTablePaging] = useState({
    take: 10,
    skip: 0,
  })
  const [tableCount, setTableCount] = useState(0)
  const { Loading } = useLoading()
  const history = useHistory()

  function handleFormProcessClick() {
    if (file) {
      // const { data } = await apiWallet.post<any[]>(
      //   '/price-table',
      // )

      setTableData([
        { description: 'Item 1', value: 5.60 },
        { description: 'Item 2', value: 5.60 },
        { description: 'Item 3', value: 5.60 },
      ])
      setCurrentStep('table')
    } else {
      toast.error('Por favor, selecione um arquivo')
    }
  }

  function handleConfirmClick() {
    toast.success('Tabela importada com sucesso')
    history.push(OPERATOR_WALLET_TABLE_IMPORT_LIST)
  }

  useEffect(() => {
    const { name = '', size = 0 } = file || {}

    setFileName(name)
    setFileSize(size)
  }, [file])

  useEffect(() => {
    async function fetchData() {
      // const { data } = await apiWallet.get<any[]>(
      //   '/price-table/:id',
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
        data.push({ description: 'Item 1', value: 5.60 })
        data.push({ description: 'Item 2', value: 5.60 })
        data.push({ description: 'Item 3', value: 5.60 })
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
        <h3>Importação de Tabelas</h3>

        {currentStep === 'form' && (
          <>
            <FormInputs>
              <Select
                label="Tipo de Tabela:"
                options={[{ label: 'Particular', value: 1 }]}
                value={selectedType}
                setValue={setSelectedType}
              />
              <Select
                label="Regional:"
                options={[{ label: 'Brasilia', value: 1 }]}
                value={selectedRegional}
                setValue={setSelectedRegional}
              />
            </FormInputs>

            <InputFile setValue={setFile}>
              <ButtonPrimary block>
                Selecionar Arquivo...
              </ButtonPrimary>
            </InputFile>

            {file && (
              <FormFileDetails>
                <li>Nome do arquivo: <span>{fileName}</span></li>
                <li>Tamanho: <span>{formatBytes(fileSize)}</span></li>
              </FormFileDetails>
            )}

            <ActionButtons>
              <ButtonOutline onClick={handleFormProcessClick}>
                Processar
              </ButtonOutline>
              <NavLink to={OPERATOR_WALLET_TABLE_IMPORT_LIST}>
                <ButtonPrimary>Cancelar</ButtonPrimary>
              </NavLink>
            </ActionButtons>
          </>
        )}

        {currentStep === 'table' && (
          <>
            <FormFileDetails>
              <li>Tipo de Tabela: <span>{selectedType}</span></li>
              <li>Regional: <span>{selectedRegional}</span></li>
              <li>Nome do arquivo: <span>{fileName}</span></li>
              <li>Tamanho: <span>{formatBytes(fileSize)}</span></li>
            </FormFileDetails>

            <Table
              columns={[
                { path: 'description', },
                {
                  path: 'value',
                  custom: (row) => (
                    <>{formatPrice(row.value)}</>
                  ),
                },
              ]}
              headers={[
                { path: 'description', label: 'Descrição', sortable: true },
                { path: 'value', label: 'Valor', sortable: true },
              ]}
              data={tableData}
              sort={tableSort}
              count={tableCount}
              onSort={setTableSort}
              onPaginate={setTablePaging}
            />

            <ActionButtons>
              <ButtonOutline onClick={handleConfirmClick}>Confirmar</ButtonOutline>
              <ButtonPrimary onClick={() => setCurrentStep('form')}>
                Cancelar
              </ButtonPrimary>
            </ActionButtons>
          </>
        )}
      </Container>
    </DefaultLayout>
  )
}
