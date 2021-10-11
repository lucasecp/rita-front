import Pagination from '@/components/Pagination'
import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/context/useLoading'
import convertToCaptalize from '@/helpers/convertToCaptalize'
import formatBirthdate from '@/helpers/formatBirthdate'
import formatName from '@/helpers/formatName'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, Td } from './styles'
import Thead from './Thead'

const TablePatients = ({ orders, setOrders, filters }) => {
  const [patients, setPatients] = useState([])
  const { Loading } = useLoading()
  useEffect(() => {
    const requestFilters = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/paciente?limit=10&skip=0${queryOrderString(
            orders
          )}${queryFilterString(filters)}`
        )
        setPatients(data)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    requestFilters()
  }, [orders, filters])

  const showStatus = (status) => {
    if (status === 'N') return 'Negado'
    if (status === 'P') return 'Pendente'
    if (status === 'A') return 'Aprovado'
    if (status === 'EA') return 'Em analise'
  }

  return (
    <>
    <Container>
      <table cellSpacing="0">
        <Thead setOrders={setOrders} orders={orders} />
        <tbody>
          {patients.dados?.map((patient, index) => (
            <tr key={index}>
              <Td soft>{formatBirthdate(patient.dataFiliacao)}</Td>
              <Td strong id="patient-name">
                <CustomTooltip label={convertToCaptalize(patient.nome)}>
                  <div>{convertToCaptalize(formatName(patient.nome))}</div>
                </CustomTooltip>
              </Td>
              <Td strong>{patient.cpf}</Td>
              <Td soft>{patient.validador}</Td>
              <Td soft>{formatBirthdate(patient.dataValidacao)}</Td>
              <Td status={showStatus(patient.status)}>
                <span>{showStatus(patient.status)}</span>
              </Td>
            </tr>
          ))}
          {patients.total === 0 && (
            <td colSpan="6">
              <NotFound>Nenhum resultado encontrado.</NotFound>
            </td>
          )}
        </tbody>
      </table>
    </Container>
    <Pagination api={apiPatient} total={patients.total}/>
    </>
  )
}

export default TablePatients
