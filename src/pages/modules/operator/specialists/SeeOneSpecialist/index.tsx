import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditSpecialist'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router-dom'
import { OPERATOR_SEE_ALL_SPECIALISTS } from '@/routes/constants/namedRoutes/routes'

const SeeOneSpecialist = () => {
  const [specialist, setSpecialist] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(OPERATOR_SEE_ALL_SPECIALISTS)
    }

    document.title = 'Rita Saúde | Informações Especialista'

    const getSpecialist = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `/medico/${location.state.idDoctor}`,
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
    <DefaultLayout title="Especialistas">
      <EditClinic specialistData={specialist} id={location.state?.idDoctor} />
    </DefaultLayout>
  )
}

export default SeeOneSpecialist
