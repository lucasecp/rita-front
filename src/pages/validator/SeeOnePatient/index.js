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
import getValidationsFromLocalStorage from './helpers/getValidationsFromLocalStorage'

function seeOnePatient() {
  const history = useHistory()
  const location = useLocation()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  if (!location.state) {
    history.push('/autorizacoes/analisar-pacientes')
    return null
  }

  const [disableFinishButton, setDisableFinishButton] = useState(true)

  const [patientData, setPatientData] = useState({})
  const [patientDependents, setPatientDependents] = useState([])
  const [patientAddress, setPatientAddress] = useState({})
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

        setValidations(getValidationsFromLocalStorage(response.data.idPaciente))
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
        console.log('falha segurando doc', response)
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
        console.log('falha identificacao', response)
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
        console.log('falha renda', response)
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
    const { documentOk, allDataVerified, resonDocumentNotOk } = validations

    setDisableFinishButton(
      !(
        (documentOk === 'yes' && allDataVerified) ||
        (documentOk === 'no' && resonDocumentNotOk)
      )
    )
  }, [validations])

  const onComeBack = () => {
    showMessage(ComeBack, { idPatient: patientData.idPaciente })
  }

  const onSaveValidations = async () => {
    localStorage.setItem(
      `@Rita/Validate/OnePatient/${patientData.idPaciente}`,
      JSON.stringify(validations)
    )

    try {
      const response = await apiPatient.patch(
        `/paciente/${patientData.idPaciente}/assumir-validacao?forcar=false`
      )

      console.log(response)
    } catch ({ response }) {
      console.log(response)
    }
  }

  const onFinishValidations = async () => {
    try {
      const response = await apiPatient.post(
        `/paciente/${patientData.idPaciente}/validar`,
        {
          dadosOk: {
            resposta: validations.documentOk === 'yes',
            motivo: validations.resonDocumentNotOk,
          },
          rendaBaixa: {
            resposta: validations.incomeOk === 'yes',
          },
        }
      )

      if (response.status === 201) {
        if (response.data.mensagem === 'Validacao efetuada com sucesso.') {
          showMessage(SimpleModal, {
            type: MODAL_TYPES.SUCCESS,
            message: 'Validação concluída!',
          })

          history.push('/autorizacoes/analisar-pacientes')
        }
      }
      console.log(response)
    } catch ({ response }) {
      console.log(response)
    }
  }

  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <PersonExpandable
          title="Dados cadastrais do titular"
          personData={patientData}
          holder
        />
        {patientDependents?.map((dependent, index) => (
          <PersonExpandable
            title={`Dados cadastrais do dependente ${index + 1}`}
            personData={dependent}
            key={index}
          />
        ))}
        <AddressSeeOnePatient address={patientAddress} />
        <DocumentsSeeOnePatient documents={patientDocuments} />
        <ValidationSeeOnePatient
          validations={validations}
          onChangeValidations={setValidations}
        />
        <footer>
          <ButtonLink onClick={onComeBack}>Voltar</ButtonLink>
          <OutlineButton onClick={onSaveValidations}>Salvar</OutlineButton>
          <ButtonPrimary
            onClick={onFinishValidations}
            disabled={disableFinishButton}
          >
            Concluir
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}

export default seeOnePatient

// {
//   documentoOk: {
//     resposta: false,
//     motivo:'Sei la'
//   },
//   rendaBaixa: true,
// }
