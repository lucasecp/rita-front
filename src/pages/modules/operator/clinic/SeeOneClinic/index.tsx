import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditClinic'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
import { OPERATOR_SEE_ALL_CLINICS } from '@/routes/constants/namedRoutes/routes'

const SeeOneClinic = () => {
  const [clinic, setClinic] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(OPERATOR_SEE_ALL_CLINICS)
    }

    document.title = 'Rita Saúde | Informações da Clínica'

    const getClinic = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `/clinica/${location.state.idClinic}`,
        )

        const clinicMapped = fromApi(data)

        setClinic(clinicMapped)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinic()
  }, [])

  return (
    <DefaultLayout title="Informações da Clínica">
      <EditClinic clinicData={clinic} />
    </DefaultLayout>
  )
}

export default SeeOneClinic
