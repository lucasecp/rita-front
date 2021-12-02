import React from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { Container } from './styles'
import { RangeOfUse } from '@/components/RangeOfUse'

export const EditPlan = () => {
  return (
    <DefaultLayout title="Gestão de Planos - Editar Plano">
      <Container>
        <RangeOfUse />
      </Container>
    </DefaultLayout>
  )
}
