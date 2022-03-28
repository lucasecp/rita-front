import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditSpecialist'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'

const SeeOneSpecialist: React.FC = () => {
  const [specialist, setSpecialist] = useState({})
  const { Loading } = useLoading()
  const location = useLocation<{ idDoctor: number }>()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(CLINIC_SEE_ALL_SPECIALIST)
    }
    console.log(location.state.idDoctor)

    document.title = 'Rita Saúde | Informações Especialista'

    const getSpecialist = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `clinica/59/medico/${location.state.idDoctor}`,
        )
        setSpecialist(fromApi(data))
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getSpecialist()
  }, [])

  return (
    <DefaultLayout title="Especialista - Visualizar">
      <EditClinic specialistData={specialist} />
    </DefaultLayout>
  )
}

export default SeeOneSpecialist
