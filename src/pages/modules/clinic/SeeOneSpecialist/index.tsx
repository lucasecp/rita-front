import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditSpecialist'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import { SpecialistDataI } from './Types'

const SeeOneSpecialist: React.FC = () => {
  const [specialist, setSpecialist] = useState<SpecialistDataI>({} as SpecialistDataI)
  const { Loading } = useLoading()
  const location = useLocation<{ idDoctor: number, status: string }>()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(CLINIC_SEE_ALL_SPECIALIST)
    }

    document.title = 'Rita Saúde | Informações Especialista'

    const getSpecialist = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `clinica/59/medico/${location.state.idDoctor}`,
        )
        setSpecialist(fromApi(data, location.state.status))
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
