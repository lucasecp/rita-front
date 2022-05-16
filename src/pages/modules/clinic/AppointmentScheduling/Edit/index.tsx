import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import Form from './Form'
import apiAdmin from '@/services/apiAdmin'
import { useLocation } from 'react-router'
import { fromApi } from './adapters'
import { DataI } from './types'

const EditAppointmentSchedule: React.FC = () => {
  const [schedulingData, setSchedulingData] = useState<DataI>({} as DataI)

  const [toggleNewRequest, setToggleNewRequest] = useState(0)
  const location = useLocation()

  const getScheduling = async () => {
    try {
      const { data } = await apiAdmin.get(
        `/clinica/59/medico/420/agenda-pessoal/30`,
      )

      setSchedulingData(fromApi(data))
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
