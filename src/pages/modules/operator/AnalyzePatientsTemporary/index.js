import React from 'react'
import { useHistory } from 'react-router'

// import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

function AnalyzePatientsTemporary() {
  const patients = [
    { cpf: '02326029135' },
    { cpf: '19397356100' },
    { cpf: '86829994047' },
    { cpf: '72262650012' },
    { cpf: '71674624115' },
  ]

  const history = useHistory()

  const seeOnePatient = (cpf) => {
    history.push('/pacientes/ver-paciente', { cpf })
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
