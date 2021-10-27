import React, { useEffect, useState } from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'
import AddressSeeOnePatient from './components/AddressSeeOnePatient'
import { useHistory, useLocation } from 'react-router'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import DocumentsSeeOnePatient from './components/DocumentsSeeOnePatient'
import ValidationSeeOnePatient from './components/ValidationSeeOnePatient'

import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'
import ComeBack from './messages/ComeBack'
import SimpleModal, { MODAL_TYPES } from '@/components/Modal/SimpleModal'
import { OPERATOR_ANALYZE_PATIENT } from '@/routes/constants/namedRoutes/routes'
import { getDataMapped } from './helpers/getDataMapped'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'
// import apiUser from '@/services/apiUser'

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

  const [validations, setValidations] = useState()

  useEffect(() => {
    const loadPatientInformations = async () => {
      const userCpf = location.state.cpf
      let holdingDocument
      let identifyDocument
      let incomeDocument
      let incomeDocumentType

      try {
        Loading.turnOn()
        const response = await apiPatient.get(`/paciente/cpf?cpf=${userCpf}`)

        setPatientData(response.data)
        setPatientDependents(response.data.dependentes)
        setPatientAddress(response.data.endereco)
        incomeDocumentType = response.data.renda

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
      } finally {
        Loading.turnOff()
      }

      setPatientDocuments({
        holdingDocument,
        identifyDocument,
        incomeDocument,
        incomeDocumentType
      })
    }

    loadPatientInformations()
  }, [])

  useEffect(() => {
    const loadValidationInformations = async () => {
      try {
        Loading.turnOn()

        const response = await apiPatient.get(
          `/paciente/${patientData.idPaciente}/validar`
        )

        const validationsFromApi = response.data[0]


        const validationsMapped = {
          documentOk: validationsFromApi.documentoOk ? 'yes' : 'no',
          resonDocumentNotOk: validationsFromApi.motivoDocumento || '',
          incomeOk: validationsFromApi.rendaBaixa ? 'yes' : 'no',
          validatorName: validationsFromApi.nomeValidador,
          date: format(
            parseISO(validationsFromApi.dataValidacao),
            'dd/MM/yyyy'
          ),
          time: format(parseISO(validationsFromApi.dataValidacao), 'HH:MM'),
          status: validationsFromApi.status,
        }

        setValidations(validationsMapped)
      } catch ({ response }) {

        // if (response.status.toString()[0] === '4') {
        //   if (response.status === 404) {
        //     // Actions to 404 Error
        //   }
        // }

        if (response?.status.toString()[0] === '5') {
          showMessage(SimpleModal, {
            type: MODAL_TYPES.ERROR,
            message: 'Erro no Servidor!',
          })
        }
      } finally {
        Loading.turnOff()
      }
    }

    if (patientData?.idPaciente) {
      loadValidationInformations()
    }
  }, [patientData])

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

  const onSavePatientData = async () => {
    const dataToSend = getDataMapped(
      patientData,
      patientDependents,
      patientAddress
    )


    try {
      Loading.turnOn()

      const response = await apiPatient.put('/paciente/operador', dataToSend)

      // remove when finished configuring API responses

      if (response.status === 200) {
        if (response.data.mensagem === 'Sucesso') {
          toast.success('Dados atualizados com sucesso.')
          history.push(OPERATOR_ANALYZE_PATIENT)
        }
      }
    } catch ({ response }) {
      // remove when finished configuring API responses

      if (response.status.toString()[0] === '4') {
        if (response.status === 404) {
          // Actions to 404 Error
        }
      }
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <DefaultLayout title="Pacientes">
      <Container>
        {patientData && (
          <PersonExpandable
            title="Dados cadastrais do titular"
            allPersonData={[patientData, ...patientDependents]}
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
        {validations && <ValidationSeeOnePatient validations={validations} />}
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
