import React from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'

function PatientData() {
  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <PersonExpandable title="Dados cadastrais do titular" />
      </Container>
    </DefaultLayout>
  )
}

export default PatientData
