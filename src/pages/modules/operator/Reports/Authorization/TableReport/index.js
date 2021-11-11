import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect } from 'react'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, ResultsFounds } from './styles'
import Header from './Header'

import { COLUMNS_NAME } from '../static/columns'
import formatObjectFromApi from '../helpers/formatObjectFromApi'
import ColumnIsActive from '../helpers/ColumnIsActive'

const TableReport = ({
  orders,
  setOrders,
  filters,
  setPatients,
  patients,
  columns,
}) => {
  const { Loading } = useLoading()

  useEffect(() => {
    const requestOrders = async () => {
      try {
        Loading.turnOn()
        const response = await apiPatient.get(
          `/validacao-paciente?limit=10&skip=0${queryOrderString(
            orders
          )}${queryFilterString(filters)}`
        )

        if (response.status === 200) {
          setPatients(formatObjectFromApi(response.data))
        }
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    requestOrders()
  }, [orders])

  return (
    <>
      <ResultsFounds>
        Foram encontrados: {patients?.total} registros
      </ResultsFounds>
      <Container>
        <Header setOrders={setOrders} orders={orders} columns={columns} />

        {patients.dataPatients?.map((patient) => (
          <ul key={patient.id}>
            <li hidden={!ColumnIsActive(COLUMNS_NAME.REGISTER, columns)}>
              {patient.registerDate || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.NAME, columns)}>
              {patient.name || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.CPF, columns)}>
              {patient.cpf || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.STATUS, columns)}>
              {patient.status || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.VALIDATOR, columns)}>
              {patient.validatorName || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.VALIDATION, columns)}>
              {patient.validationDate || '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.DATAISVALID, columns)}>
              {patient.documentOk ? 'Sim' : '-'}
            </li>

            <li hidden={!ColumnIsActive(COLUMNS_NAME.INCOME, columns)}>
              {patient.income ? 'Sim' : '-'}
            </li>

            <li
              hidden={
                !ColumnIsActive(COLUMNS_NAME.REASON_FOR_NEGATIVE, columns)
              }
            >
              {patient.reasonForNegative || '-'}
            </li>
          </ul>
        ))}

        {!patients?.total && <NotFound>Nenhum resultado encontrado.</NotFound>}
      </Container>
    </>
  )
}

export default TableReport
