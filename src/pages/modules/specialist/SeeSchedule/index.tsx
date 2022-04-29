import React from 'react'
/** Components */
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Main from './Main'
import { ScheduleSpecialistProvider } from './hooks'

const SeeSchedule: React.FC = () => {
  return (
    <DefaultLayout title="Horário de trabalho profissional">
      <ScheduleSpecialistProvider>
        <Main />
      </ScheduleSpecialistProvider>
    </DefaultLayout>
  )
}

export default SeeSchedule
