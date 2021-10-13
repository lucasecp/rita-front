import Pagination from '@/components/Pagination'
import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/context/useLoading'
import convertToCaptalize from '@/helpers/convertToCaptalize'
import formatBirthdate from '@/helpers/formatBirthdate'
import formatName from '@/helpers/formatName'
import useQuery from '@/hooks/useQuery'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, Td } from './styles'
import Thead from './Thead'

const TablePatients = ({ orders, setOrders, filters }) => {
  const query = useQuery()
  const initialQuery = `?limit=${Number(query.get('limit')) || '10'}&skip=${
    (Number(query.get('page')) - 1) * Number(query.get('limit')) || '0'
  }`

  const [patients, setPatients] = useState([])
  const { Loading } = useLoading()
  const [queryPagination, setQueryPagination] = useState(initialQuery)

  useEffect(() => {
    const requestFilters = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/paciente${queryPagination}${queryOrderString(
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
  }, [orders, filters, queryPagination])

  const showStatus = (status) => {
    if (status === 'N') return 'Negado'
    if (status === 'P') return 'Pendente'
    if (status === 'A') return 'Aprovado'
    if (status === 'EA') return 'Em analise'
  }

  const handleClick = async (id) => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(`/paciente/${id}/assumir-validacao`)

      // remove when finished configuring API responses
      console.log(response)

      if (response.status === 200) {
        if (response.data.mensagem === 'Message From Api') {
          // Actions
        }
      }
    } catch ({ response }) {
      // remove when finished configuring API responses
      console.log(response)
        if (response.status === 401) {
          // Actions to 401 Error
        }

      if (response.status[0] === 5) {

      }
    } finally {
      Loading.turnOff()
    }
  }


  return (
    <>
      <Container>
        <table cellSpacing="0">
          <Thead setOrders={setOrders} orders={orders} />
          <tbody>
            {patients.dados?.map((patient, index) => (
              <tr key={index} onClick={()=> handleClick(patient.id)}>
                <Td soft>{formatBirthdate(patient.dataFiliacao) || '-'}</Td>
                <Td strong id="patient-name">
                  <CustomTooltip
                    label={convertToCaptalize(patient.nome) || '-'}
                  >
                    <div>
                      {convertToCaptalize(formatName(patient.nome)) || '-'}
                    </div>
                  </CustomTooltip>
                </Td>
                <Td strong>{patient.cpf || '-'}</Td>
                <Td soft>{patient.validador || '-'}</Td>
                <Td soft>{formatBirthdate(patient.dataValidacao) || '-'}</Td>
                <Td status={showStatus(patient.status) || '-'}>
                  <span>{showStatus(patient.status) || '-'}</span>
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
      <Pagination
        total={patients.total}
        setQuery={setQueryPagination}
        restQuery={queryFilterString(filters) + queryOrderString(orders)
        }
      />
    </>
  )
}

export default TablePatients
