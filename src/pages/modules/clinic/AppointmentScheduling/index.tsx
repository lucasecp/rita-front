import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React from 'react'
import Form from './Form'

const AppointmentScheduling: React.FC = () => {
  return (
    <DefaultLayout title="Criar Agendamento">
      <Form />
    </DefaultLayout>
  )
}

export default AppointmentScheduling
