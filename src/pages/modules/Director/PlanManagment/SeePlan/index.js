import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import PlanInformationsDisabled from '../components/PlanInformationsDisabled'

const SeePlan = ({ idPlan }) => {
  const [planInfo, setPlanInfo] = useState({});
  useEffect(() => {
    const getPlanInfo = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(`/plano/${idPlan}/abrangencia`)
        setPlanInfo(response.data)
      } catch ({ response }) {
      } finally {
      }
    }
    getPlanInfo()
  }, [])
  return (
    <DefaultLayout title="Gestão de Planos - Visualizar Plano">
      <PlanInformationsDisabled data={planInfo} />
    </DefaultLayout>
  )
}

export default SeePlan
