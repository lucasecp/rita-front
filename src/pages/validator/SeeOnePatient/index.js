import React, { useEffect, useState } from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'
import AddressPatientData from './components/AddressPatientData'
import { useHistory, useLocation } from 'react-router'
import apiPatient from '@/services/apiPatient'

function seeOnePatient() {
  const history = useHistory()
  const location = useLocation()

  if (!location.state) {
    history.push('/autorizacoes/analisar-pacientes')
    return null
  }

  const [patientData, setPatientData] = useState({})
  const [patientDependents, setPatientDependents] = useState([])
  const [patientAddress, setPatientAddress] = useState({})

  useEffect(async () => {
    const userCpf = location.state.cpf

    try {
      const response = await apiPatient.get(`/paciente/cpf?cpf=${userCpf}`)

      setPatientData(response.data)
      setPatientDependents(response.data.dependentes)
      setPatientAddress(response.data.endereco)
    } catch ({ response }) {
      console.log(response)
    }
  }, [])

  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <PersonExpandable
          title="Dados cadastrais do titular"
          personData={patientData}
        />
        <PersonExpandable
          title="Dados cadastrais do dependente 1"
          personData={{}}
        />
        <PersonExpandable
          title="Dados cadastrais do dependente 2"
          personData={{}}
        />
        <AddressPatientData address={patientAddress} />
      </Container>
    </DefaultLayout>
  )
}

export default seeOnePatient
