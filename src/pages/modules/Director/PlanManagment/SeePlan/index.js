import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import PlanInformationsDisabled from './components/PlanInformationsDisabled'
import { useLoading } from '@/hooks/useLoading'
import { useLocation, useHistory } from 'react-router'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

const SeePlan = () => {
  const [planInfo, setPlanInfo] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar Plano'

    if (!location.state) {
      return history.push(DIRECTOR_PLAN_MANAGMENT)
    }

    const getPlanInfo = async () => {
      try {
        Loading.turnOn()
        const response = await apiAdmin.get(`/plano/${location.state.idPlan}`)
        setPlanInfo(response.data)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getPlanInfo()
  }, [])

  return (
    <DefaultLayout title="Visualizar Plano">
      <PlanInformationsDisabled data={planInfo} />
    </DefaultLayout>
  )
}

export default SeePlan
