import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import CreateSchedule from './Main/CreateSchedule'
import Header from './Main/Header'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import { fromApi } from './adapters'
import Main from './Main'
import { ScheduleSpecialistProvider } from './hooks'

const SeeSchedule: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Agenda Profissional'
  }, [])

  return (
    <DefaultLayout title="Especialista - Horários">
      <ScheduleSpecialistProvider>
        <Main />
      </ScheduleSpecialistProvider>
    </DefaultLayout>
  )
}

export default SeeSchedule
