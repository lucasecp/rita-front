import DefaultLayout from '@/components/Layout/DefaultLayout'
import React from 'react'
import { useHistory } from 'react-router'
import Filter from './Filter'

// import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatients() {

  const history = useHistory()

  const seeOnePatient = (cpf) => {
    history.push('/autorizacoes/ver-paciente', { cpf })
  }

  return (
    <DefaultLayout title="Pacientes">
    <Container>
     <Filter/>
    </Container>
   </DefaultLayout>
  )
}

export default AnalyzePatients
