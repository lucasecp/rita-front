import React from 'react'
import { useHistory } from 'react-router'

// import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatients() {
  const patients = [
    { cpf: '86829994047' },
    { cpf: '72262650012' },
    { cpf: '00864506112' },
    { cpf: '71674624115' },
    { cpf: '01515208109' },
  ]

  const history = useHistory()

  const seeOnePatient = (cpf) => {
    history.push('/autorizacoes/ver-paciente', { cpf })
  }

  return (
    // <DefaultLayout>
    <Container>
      {patients.map((patient, index) => (
        <>
          <button key={index} onClick={() => seeOnePatient(patient.cpf)}>
            {patient.cpf}
          </button>
          <br />
        </>
      ))}
    </Container>
    // </DefaultLayout>
  )
}

export default AnalyzePatients
