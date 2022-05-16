import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import Form from './Form'
import apiAdmin from '@/services/apiAdmin'
import { useLocation } from 'react-router'
import { fromApi } from './adapters'
import { DataToApiI } from './types'

const EditAppointmentSchedule: React.FC = () => {
  const [schedulingData, setSchedulingData] = useState<DataToApiI>(
    {} as DataToApiI,
  )

  const [toggleNewRequest, setToggleNewRequest] = useState(0)
  const location = useLocation()

  const getScheduling = async () => {
    try {
      // const result = await apiAdmin.get(
      //   `/clinica/59/medico/420/agenda-pessoal/30`,
      // )

      setSchedulingData(
        fromApi({
          titulo: '',
          dataInicio: '14/05/2022',
          dataFim: '14/05/2022',
          horaInicio: '11:00:09',
          horaFim: '12:00:33',
          origem: 'Rita',
          idEspecialidade: 5,
          idPaciente: 2,
          cpf: '07440384563',
          idMedico: 443
        }),
      )
    } catch (error) {}
  }

  useEffect(() => {
    getScheduling()
  }, [toggleNewRequest])

  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar/Editar Agendamento'

  // idSchedule

    if (!location.state) {
      // return history.push(CLINIC_SEE_ALL_APPOINTMENT_SCHEDULES)
    }
  }, [])

  return (
    <DefaultLayout title="Visualizar/Editar Agendamento">
      <Form data={schedulingData} setToggleNewRequest={setToggleNewRequest} />
    </DefaultLayout>
  )
}

export default EditAppointmentSchedule
