import React from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Content } from './styles'

const AppointmentTable: React.FC = () => {
  return (
    <DefaultLayout title="Tabela de consulta">
      <Content>
        <h2>Especialidades</h2>
      </Content>
    </DefaultLayout>
  )
}

export default AppointmentTable
