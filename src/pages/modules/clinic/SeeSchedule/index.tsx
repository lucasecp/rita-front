import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect } from 'react'
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
