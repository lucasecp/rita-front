import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import Form from './Form'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
import { fromApi } from './adapters'
import { DataI } from './types'
import { useAuth } from '@/hooks/login'
import { CLINIC_SEE_ALL_APPOINTMENT_SCHEDULES } from '@/routes/constants/namedRoutes/routes'

const EditAppointmentSchedule: React.FC = () => {
  const [schedulingData, setSchedulingData] = useState<DataI>({} as DataI)

  const [toggleNewRequest, setToggleNewRequest] = useState(0)

  const location = useLocation()

  const history = useHistory()

  const { user } = useAuth()

  const getScheduling = async () => {
    const idDoctor = location.state?.idDoctor || 217

    const idSchedule = location.state?.idSchedule || 34

    try {
      const { data } = await apiAdmin.get(
        `/clinica/${user.idClinica}/medico/${idDoctor}/agenda-pessoal/${idSchedule}`,
      )

      setSchedulingData(fromApi(data))
    } catch (error) { }
  }

  useEffect(() => {
    getScheduling()
  }, [toggleNewRequest])

  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar/Editar Agendamento'

    if (!location.state) {
      return history.push(CLINIC_SEE_ALL_APPOINTMENT_SCHEDULES)
    }
  }, [])

  return (
    <DefaultLayout title="Visualizar/Editar Agendamento">
      <Form data={schedulingData} setToggleNewRequest={setToggleNewRequest} />
    </DefaultLayout>
  )
}

export default EditAppointmentSchedule
