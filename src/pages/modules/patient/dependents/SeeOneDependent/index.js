import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditDependent from './EditDependent'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useHistory, useLocation } from 'react-router'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

const SeeDependents = () => {
  const [dependent, setDependent] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(PATIENT_DEPENDENTS)
    }

    document.title = 'Rita Saúde | Dependentes'

    const getDependents = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/paciente/dependente?id=${location.state.idDependent}`,
        )
        setDependent(fromApi(data))
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getDependents()
  }, [])

  return (
    <DefaultLayout title="Visualizar informações de dependente">
      <EditDependent dependentData={dependent} />
    </DefaultLayout>
  )
}

export default SeeDependents
