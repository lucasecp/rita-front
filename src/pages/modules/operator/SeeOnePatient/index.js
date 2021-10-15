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
import { OPERATOR_ANALYZE_PATIENT } from '@/routes/constants/namedRoutes/routes'

function seeOnePatient() {
  const history = useHistory()
  const location = useLocation()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  if (!location.state) {
    history.push(OPERATOR_ANALYZE_PATIENT)
    return null
  }

  const [disableSaveButton, setDisableSaveButton] = useState(true)

  const [patientData, setPatientData] = useState()

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


        setPatientData(response.data)
        setPatientDependents(response.data.dependentes)
        setPatientAddress(response.data.endereco)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }

      try {
        Loading.turnOn()

        holdingDocument = await apiPatient.get(
          `/paciente/documento?cpf=${userCpf}&tipoDocumento=FotoSegurandoDoc`,
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
          `/paciente/documento?cpf=${userCpf}&tipoDocumento=Cpf`,
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
          `/paciente/documento?cpf=${userCpf}&tipoDocumento=Renda`,
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

  useEffect(() => {
    const dependentErrorExists = patientDependents.some(
      (dependent) => dependent?.error
    )

    setDisableSaveButton(dependentErrorExists || patientData?.error)
  }, [patientData, patientDependents])

  const onDependentsChange = (personDataReceived, index) => {
    const patientDependentsTemporary = patientDependents

    patientDependentsTemporary[index] = personDataReceived

    setPatientDependents([...patientDependentsTemporary])
  }

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
            allPersonData={[patientData, ...patientDependents]}
            personData={dependent}
            setPersonData={(personDataReceived) =>
              onDependentsChange(personDataReceived, index)
            }
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
          <ButtonLink onClick={onComeBack}>Voltar</ButtonLink>
          <OutlineButton
            disabled={disableSaveButton}
            onClick={onSavePatientData}
          >
            Salvar
          </OutlineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}

export default seeOnePatient
