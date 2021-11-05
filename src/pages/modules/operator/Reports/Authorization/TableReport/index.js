import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'
import convertToCaptalize from '@/helpers/convertToCaptalize'
import formatName from '@/helpers/formatName'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { queryOrderString, queryFilterString } from '../helpers/queryString'
import { Container, NotFound, ResultsFounds, Td } from './styles'
import Header from './Header'

import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatCpf from '@/helpers/formatCpf'
import formatFistLastName from '@/helpers/formatFistLastName'

const TableReport = ({ orders, setOrders, filters }) => {
  const [patients, setPatients] = useState({})
  const { Loading } = useLoading()

  // useEffect(() => {
  //   const requestFilters = async () => {
  //     try {
  //       Loading.turnOn()
  //       const response = await apiPatient.get(
  //         `/pacient${queryOrderString(
  //           orders
  //         )}${queryFilterString(filters)}`
  //       )
  //       if (response.status === 200) {
  //         setPatients(response.data)
  //       }
  //     } catch ({ response }) {
  //       if (response.status === 401) {
  //         return history.push(LOGIN)
  //       }
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }
  //   requestFilters()
  // }, [orders, filters])

  const showStatus = (status) => {
    if (status === 'N') return 'Negado'
    if (status === 'P') return 'Pendente'
    if (status === 'A') return 'Aprovado'
    if (status === 'EA') return 'Em análise'
  }

  return (
    <>
   <ResultsFounds>Foram encontrados: 4500 registros</ResultsFounds>
      <Container>
          <Header setOrders={setOrders} orders={orders} />

            {/* {patients?.dados?.length !== 0 &&
              patients?.dados?.map((patient) => (
                <ul
                  key={patient.idPaciente}

                >
                  <Td soft>
                    {formateDateAndHour(patient.dataFiliacao) || '-'}
                  </Td>
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
                  <Td soft>
                    {formatFistLastName(patient.validador?.nome) || '-'}
                  </Td>
                  <Td soft>
                    {formateDateAndHour(patient.dataValidacao) || '-'}
                  </Td>
                  <Td status={showStatus(patient.status)}>
                    <span>{showStatus(patient.status) || '-'}</span>
                  </Td>
                </ul>
              ))} */}
            {/* {!patients?.total && (
              <ul>
                <td colSpan="6">
                  <NotFound>Nenhum resultado encontrado.</NotFound>
                </td>
              </ul>
            )} */}

            <ul>
              <li>Alfreds Futterkiste</li>
              <li>Maria Anders</li>
              <li>Germany</li>
              <li>Alfreds Futterkiste</li>
              <li>Maria Anders</li>
              <li>Germany</li>
              <li>Alfreds Futterkiste</li>
              <li>Maria Anders</li>
              <li>Germany</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
            </ul>
            <ul>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Mexico</li>
              <li>Centro comercial Moctezuma</li>
              <li>Francisco Chang</li>
              <li>Francisco Chang</li>
              <li>Francisco Chang</li>
              <li>Francisco Chang</li>
              <li>Francisco Chang</li>
            </ul>

      </Container>
    </>
  )
}

export default TableReport
