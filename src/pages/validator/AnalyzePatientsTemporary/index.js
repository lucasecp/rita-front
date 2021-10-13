import React from 'react'
import { useHistory } from 'react-router'

// import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatientsTemporary() {
  const patients = [
    { cpf: '02184140139' },
    { cpf: '19397356100' },
    { cpf: '86829994047' },
    { cpf: '72262650012' },
    { cpf: '71674624115' },
    { cpf: '02574416112' },
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

export default AnalyzePatientsTemporary
