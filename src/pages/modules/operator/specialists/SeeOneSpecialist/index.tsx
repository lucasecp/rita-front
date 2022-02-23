import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditClinic'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
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
    console.log(location.state.idDoctor)

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
    <DefaultLayout title="Especialista - Visualizar e Editar">
      <EditClinic specialistData={specialist} id={location.state?.idDoctor} />
    </DefaultLayout>
  )
}

export default SeeOneSpecialist
