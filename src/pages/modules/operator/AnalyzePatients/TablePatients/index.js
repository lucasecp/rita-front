import Pagination from '@/components/Pagination'
import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/context/useLoading'
import convertToCaptalize from '@/helpers/convertToCaptalize'
import formatName from '@/helpers/formatName'
import useQuery from '@/hooks/useQuery'
import apiPatient from '@/services/apiPatient'
import { getUserStorage, setHeaderToken } from '@/storage/user'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, Td } from './styles'
import Thead from './Thead'
import { LOGIN, VALIDATOR_SEE_ONE_PATIENT } from '@/routes/constants/namedRoutes/routes'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatCpf from '@/helpers/formatCpf'
import formatFistLastName from '@/helpers/formatFistLastName'

const TablePatients = ({ orders, setOrders, filters }) => {
  const query = useQuery()
  const history = useHistory()
  const initialQuery = `?limit=${Number(query.get('limit')) || '10'}&skip=${
    (Number(query.get('page')) - 1) * Number(query.get('limit')) || '0'
  }`

  const [patients, setPatients] = useState({})
  const { Loading } = useLoading()
  const [queryPagination, setQueryPagination] = useState(initialQuery)


  useEffect(() => {
    setHeaderToken(getUserStorage().token)
    const requestFilters = async () => {
      try {
        Loading.turnOn()
        const response = await apiPatient.get(
          `/paciente${queryPagination}${queryOrderString(
            orders
          )}${queryFilterString(filters)}`
        )
        if (response.status === 200) {
          setPatients(response.data)
        }
      } catch ({ response }) {
        if (response.status === 401) {
          return history.push(LOGIN)
        }
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
    if (status === 'EA') return 'Em análise'
  }

  const handleClick = async (cpf) => {
    history.push(VALIDATOR_SEE_ONE_PATIENT, { cpf })
  }

  return (
    <>
      <Container>
        <table cellSpacing="0">
          <Thead setOrders={setOrders} orders={orders} />
          <tbody>
            {patients?.dados?.length !== 0 &&
              patients?.dados?.map((patient) => (
                <tr
                  key={patient.idPaciente}
                  onClick={() => handleClick(patient.idPaciente, patient.cpf)}
                >
                  <Td soft>{formateDateAndHour(patient.dataFiliacao) || '-'}</Td>
                  <Td strong id="patient-name">
                    <CustomTooltip
                      label={convertToCaptalize(patient.nome) || '-'}
                    >
                      <div>
                        {convertToCaptalize(formatName(patient.nome)) || '-'}
                      </div>
                    </CustomTooltip>
                  </Td>
                  <Td strong>{formatCpf(patient.cpf) || '-'}</Td>
                  <Td soft>{formatFistLastName(patient.validador?.nome) || '-'}</Td>
                  <Td soft>{formateDateAndHour(patient.dataValidacao) || '-'}</Td>
                  <Td status={showStatus(patient.status)}>
                    <span>{showStatus(patient.status) || '-'}</span>
                  </Td>
                </tr>
              ))}
            {!patients?.total && (
              <tr>
                <td colSpan="6">
                  <NotFound>Nenhum resultado encontrado.</NotFound>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>

      <Pagination
        total={patients?.total}
        setQuery={setQueryPagination}
        restQuery={queryFilterString(filters) + queryOrderString(orders)}
      />
    </>
  )
}

export default TablePatients
