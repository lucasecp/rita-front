import Pagination from '@/components/Pagination'
import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'
import { everyFirstLetterCapitalize } from '@/helpers/everyFirstLetterCapitalize'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import apiPatient from '@/services/apiPatient'
import { useModal } from '@/hooks/useModal'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import RecordAlreadyAnalized from './messages/error/RecordAlreadyAnalyzed'
import { Container, NotFound, Td } from './styles'
import Thead from './Thead'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/to-do.svg'

import {
  LOGIN,
  VALIDATOR_SEE_ONE_PATIENT,
} from '@/routes/constants/namedRoutes/routes'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import { formatCpf } from '@/helpers/formatCpf'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { SimpleModal, MODAL_TYPES } from '@/components/Modal/SimpleModal'

const TablePatients = ({ orders, setOrders, filters }) => {
  const [patients, setPatients] = useState({})
  const { Loading } = useLoading()
  const [queryPagination, setQueryPagination] = useState('')
  const history = useHistory()
  const { showMessage } = useModal()

  useEffect(() => {
    if (!queryPagination) {
      return
    }
    const requestFilters = async () => {
      try {
        Loading.turnOn()
        const response = await apiPatient.get(
          `/paciente${queryPagination}${
            queryFilterString(filters) + queryOrderString(orders)
          }`,
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

  const handleClick = async (id, cpf) => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(
        `/paciente/${id}/assumir-validacao?forcar=false`,
      )
      if (response.status === 200) {
        history.push(VALIDATOR_SEE_ONE_PATIENT, { cpf })
      }
    } catch ({ response }) {
      const responseApi = response.data
      if (
        response.status === 400 &&
        responseApi.message ===
          'Atenção Este registro está sendo analisado por outro validador.'
      ) {
        return showMessage(RecordAlreadyAnalized, {
          validator: formatFirstLastName(responseApi.validador),
          date: Array.from(responseApi.data).splice(0, 5),
          id,
          cpf,
        })
      }

      return showMessage(SimpleModal, {
        type: MODAL_TYPES.WARNING,
        message: responseApi.message,
      })
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
            {patients?.dados?.length !== 0 &&
              patients?.dados?.map((patient) => (
                <tr key={patient.idPaciente}>
                  <Td soft size={100}>
                    {formateDateAndHour(patient.dataFiliacao, ' - ') || '-'}
                  </Td>
                  <Td strong size={240} id="patient-name">
                    <CustomTooltip
                      label={everyFirstLetterCapitalize(patient.nome) || '-'}
                    >
                      <div>
                        {everyFirstLetterCapitalize(
                          formatTextWithLimit(patient.nome, 38),
                        ) || '-'}
                      </div>
                    </CustomTooltip>
                  </Td>
                  <Td strong size={140}>
                    {formatCpf(patient.cpf) || '-'}
                  </Td>
                  <Td soft size={120}>
                    {formatFirstLastName(patient.validador?.nome) || '-'}
                  </Td>
                  <Td soft size={100}>
                    {formateDateAndHour(patient.dataValidacao, ' - ') || '-'}
                  </Td>
                  <Td status={showStatus(patient.status)} size={120}>
                    <span>{showStatus(patient.status) || '-'}</span>
                  </Td>
                  <Td
                    soft
                    center
                    size={80}
                    onClick={() => handleClick(patient.idPaciente, patient.cpf)}
                  >
                    <CustomTooltip label="Validar">
                      <AuthorizationIcon />
                    </CustomTooltip>
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
