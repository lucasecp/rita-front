import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React from 'react'
import Edit from './Edit'

const SpecialistProfile: React.FC = () => {
  return (
    <DefaultLayout title="Perfil - Visualizar">
      <Edit />
    </DefaultLayout>
  )
}

export default SpecialistProfile
