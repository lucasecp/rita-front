import React from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'
import AddressPatientData from './components/AddressPatientData'

function PatientData() {
  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <PersonExpandable title="Dados cadastrais do titular" personData={{}} />
        <PersonExpandable
          title="Dados cadastrais do dependente 1"
          personData={{}}
        />
        <PersonExpandable
          title="Dados cadastrais do dependente 2"
          personData={{}}
        />
        <AddressPatientData address={{}} />
      </Container>
    </DefaultLayout>
  )
}

export default PatientData
