import React, { useEffect, useState } from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'
import AddressSeeOnePatient from './components/AddressSeeOnePatient'
import { useHistory, useLocation } from 'react-router'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/context/useLoading'
import DocumentsSeeOnePatient from './components/DocumentsSeeOnePatient'
import ValidationSeeOnePatient from './components/ValidationSeeOnePatient'

import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/context/useModal'
import ComeBack from './messages/ComeBack'
import SimpleModal, { MODAL_TYPES } from '@/components/Modal/SimpleModal'

function seeOnePatient() {
  const history = useHistory()
  const location = useLocation()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  if (!location.state) {
    history.push('/pacientes/analisar-pacientes')
    return null
  }

  const [disableSaveButton, setDisableSaveButton] = useState(true)

  const [patientData, setPatientData] = useState()
  const [patientDataFromApi, setPatientDataFromApi] = useState({})

  const [patientDependents, setPatientDependents] = useState([])
  const [patientAddress, setPatientAddress] = useState()
  const [patientDocuments, setPatientDocuments] = useState({})

  const [validations, setValidations] = useState({})

  useEffect(() => {
    const loadPatientInformations = async () => {
      const userCpf = location.state.cpf
      let holdingDocument
      let identifyDocument
      let incomeDocument

      try {
        Loading.turnOn()
        const response = await apiPatient.get(`/paciente/cpf?cpf=${userCpf}`)

        console.log(response.data)

        setPatientData(response.data)
        setPatientDependents(response.data.dependentes)
        setPatientAddress(response.data.endereco)
      } catch ({ response }) {
        console.log(response)
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        holdingDocument = await apiPatient.get(
          `/paciente/documento?cpf=${userCpf}&tipoDocumeto=FotoSegurandoDoc`,
          { responseType: 'arraybuffer' }
        )
      } catch ({ response }) {
        // console.log('falha segurando doc', response)
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        identifyDocument = await apiPatient.get(
          `/paciente/documento?cpf=${userCpf}&tipoDocumeto=Cpf`,
          { responseType: 'arraybuffer' }
        )
      } catch ({ response }) {
        // console.log('falha identificacao', response)
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        incomeDocument = await apiPatient.get(
          `/paciente/documento?cpf=${userCpf}&tipoDocumeto=Renda`,
          { responseType: 'arraybuffer' }
        )
      } catch ({ response }) {
        // console.log('falha renda', response)
      } finally {
        Loading.turnOff()
      }

      setPatientDocuments({
        holdingDocument,
        identifyDocument,
        incomeDocument,
      })
    }

    loadPatientInformations()
  }, [])

  const onComeBack = () => {
    showMessage(ComeBack, { idPatient: patientData.idPaciente })
  }

  const onSavePatientData = async () => {}

  return (
    <DefaultLayout title="Pacientes">
      <Container>
        {patientData && (
          <PersonExpandable
            title="Dados cadastrais do titular"
            personData={patientData}
            setPersonData={setPatientData}
            holder
          />
        )}
        {patientDependents?.map((dependent, index) => (
          <PersonExpandable
            title={`Dados cadastrais do dependente ${index + 1}`}
            personData={dependent}
            setPersonData={()=>{
              
            }}
            key={index}
          />
        ))}
        {patientAddress && (
          <AddressSeeOnePatient
            address={patientAddress}
            setAddress={setPatientAddress}
          />
        )}
        <DocumentsSeeOnePatient documents={patientDocuments} />
        <ValidationSeeOnePatient validations={validations} />
        <footer>
          <ButtonLink onClick={null}>Voltar</ButtonLink>
          <OutlineButton onClick={null}>Salvar</OutlineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}

export default seeOnePatient
