import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React from 'react'
import { Container } from './styles'

const PlanManagment = () => {
  return (
    <Container>
    <DefaultLayout
      title="Gestão de Planos"
      headerChildren={<ButtonPrimary>Incluir</ButtonPrimary>}
    >
      

    </DefaultLayout>
    </Container>
  )
}

export default PlanManagment
