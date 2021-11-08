import { useLoading } from '@/hooks/useLoading'
import formatName from '@/helpers/formatName'
import apiPatient from '@/services/apiPatient'
import React, { useEffect } from 'react'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, ResultsFounds } from './styles'
import Header from './Header'

import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatCpf from '@/helpers/formatCpf'
import formatFistLastName from '@/helpers/formatFistLastName'

const TableReport = ({ orders, setOrders, filters, setPatients, patients }) => {
  const { Loading } = useLoading()

  useEffect(() => {
    if (!orders.length) {
      return
    }

    const requestOrders = async () => {
      try {
        Loading.turnOn()
        const response = await apiPatient.get(
          `/validacao-paciente?limit=10&skip=0${queryOrderString(
            orders
          )}${queryFilterString(filters)}`
        )

        if (response.status === 200) {
          setPatients(response.data)
        }
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    requestOrders()
  }, [orders])

  const showStatus = (status) => {
    if (status === 'N') return 'Negado'
    if (status === 'P') return 'Pendente'
    if (status === 'A') return 'Aprovado'
    if (status === 'EA') return 'Em análise'
  }

  return (
    <>
      <ResultsFounds>
        Foram encontrados: {patients?.total} registros
      </ResultsFounds>
      <Container>
        <Header setOrders={setOrders} orders={orders} />

        {patients.dados?.map((patient) => (
          <ul key={patient.id}>
            <li>{formateDateAndHour(patient.dataFiliacao) || '-'}</li>
            <li>{formatName(patient.nome) || '-'}</li>
            <li>{formatCpf(patient.cpf) || '-'}</li>
            <li> {formatFistLastName(patient.validador?.nome) || '-'}</li>
            <li>{formateDateAndHour(patient.dataValidacao) || '-'}</li>
            <li>{showStatus(patient.status) || '-'}</li>
            <li>{patient.documentoOk ? 'Sim' : '-'}</li>
            <li>{patient.rendaBaixa ? 'Sim' : '-'}</li>
            <li>{patient.motivoDocumento || '-'}</li>
          </ul>
        ))}

        {!patients?.total && <NotFound>Nenhum resultado encontrado.</NotFound>}
      </Container>
    </>
  )
}

export default TableReport
