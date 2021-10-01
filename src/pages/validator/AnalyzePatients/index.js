import React from 'react'
import { useHistory } from 'react-router'

<<<<<<< HEAD
=======
// import DefaultLayout from '@/components/Layout/DefaultLayout'
>>>>>>> 10e661997d58028623f4032ebbe948ccf9f56070

import { Container } from './styles'

function AnalyzePatients() {
  const patients = [
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
        <button key={index} onClick={() => seeOnePatient(patient.cpf)}>
          {patient.cpf}
        </button>
      ))}
    </Container>
    // </DefaultLayout>
  )
}

export default AnalyzePatients
