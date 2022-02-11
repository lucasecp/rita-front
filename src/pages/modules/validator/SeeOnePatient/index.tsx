import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { AxiosError } from 'axios'
import { differenceInYears, parse } from 'date-fns'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { PersonExpandable } from './components/PersonExpandable'
import { DependentExpandable } from './components/DependentExpandable'
import { AddressSeeOnePatient } from './components/AddressSeeOnePatient'
import { DocumentsSeeOnePatient } from './components/DocumentsSeeOnePatient'
import { ValidationSeeOnePatient } from './components/ValidationSeeOnePatient'

import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { ComeBack } from './messages/ComeBack'
import { SimpleModal, MODAL_TYPES } from '@/components/Modal/SimpleModal'
import { VALIDATOR_ANALYZE_PATIENTS } from '@/routes/constants/namedRoutes/routes'
import formatFirstLastName from '@/helpers/formatFirstLastName'

import { fromApi } from './adapters/fromApi'
import { PatientAddress, PatientData, PatientValidation } from './@types'
import { Container } from './styles'

export const SeeOnePatient: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const cpf = location.state?.cpf

  const { Loading } = useLoading()
  const { showMessage, showSimple } = useModal()

  if (!cpf) {
    history.push(VALIDATOR_ANALYZE_PATIENTS)
  }

  const [disableFinishButton, setDisableFinishButton] = useState(true)

  const [patientData, setPatientData] = useState({} as PatientData)
  const [patientDependents, setPatientDependents] = useState(
    [] as PatientData[],
  )
  const [patientAddress, setPatientAddress] = useState({} as PatientAddress)
  const [dependent, setDependent] = useState({} as PatientData | undefined)

  const [incomeType, setIncomeType] = useState('')

  const [validations, setValidations] = useState({} as PatientValidation)

  useEffect(() => {
    document.title = 'Rita Saúde | Autorizações'

    const loadPatientInformations = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(`/paciente/cpf?cpf=${cpf}`)

        const patientMapped = fromApi(data)

        setPatientData(patientMapped.patientData)
        setPatientDependents(patientMapped.patientDependents)
        setPatientAddress(patientMapped.patientAddress)
        setDependent(patientMapped?.dependent)
        setIncomeType(patientMapped.incomeType)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    loadPatientInformations()
  }, [])

  useEffect(() => {
    const { documentOk, allDataVerified, resonDocumentNotOk } = validations

    setDisableFinishButton(
      !(
        (documentOk === 'yes' && allDataVerified) ||
        (documentOk === 'no' && resonDocumentNotOk)
      ),
    )
  }, [validations])

  const hasDependentUnderAge = useMemo(() => {
    if (!dependent) {
      return false
    }

    const dateParsed = parse(dependent.birthDate, 'dd/MM/yyyy', new Date())
    const age = differenceInYears(new Date(), dateParsed)

    return age < 18
  }, [dependent])

  const onComeBack = () => {
    showMessage(ComeBack, { idPatient: patientData.id })
  }

  const onSaveValidations = async () => {
    const idPatient = dependent ? dependent?.id : patientData?.id

    try {
      Loading.turnOn()
      await apiPatient.patch(
        `/paciente/${idPatient}/assumir-validacao?forcar=false`,
      )

      localStorage.setItem(
        `@Rita/Validate/OnePatient/${idPatient}`,
        JSON.stringify(validations),
      )

      showSimple.success('Validação salva!')
    } catch (error) {
      const { response } = error as AxiosError

      if (response?.status.toString()[0] === '4') {
        if (
          response.data.message ===
          'Atenção Este registro está sendo analisado por outro validador.'
        ) {
          showMessage(SimpleModal, {
            type: MODAL_TYPES.WARNING,
            message: (
              <>
                Este registro está sendo analisado pelo validador{' '}
                {formatFirstLastName(response.data.validador)} desde{' '}
                {Array.from(response.data.data).splice(0, 5)}.<br />
                Suas alterações não foram salvas
              </>
            ),
          })
        }
      }

      if (response?.status.toString()[0] === '5') {
        showSimple.error('Erro no Servidor!')
      }
    } finally {
      Loading.turnOff()
      history.push(VALIDATOR_ANALYZE_PATIENTS)
    }
  }

  const onFinishValidations = async () => {
    const idPatient = dependent ? dependent?.id : patientData?.id

    try {
      Loading.turnOn()
      const response = await apiPatient.post(`/paciente/${idPatient}/validar`, {
        dadosOk: {
          resposta: validations.documentOk === 'yes',
          motivo: validations.resonDocumentNotOk,
        },
        rendaBaixa: {
          resposta: validations.incomeOk === 'yes',
        },
      })

      if (response.status === 201) {
        if (response.data.mensagem === 'Validação concluída!') {
          // if (response.data.mensagem === 'Validacao efetuada com sucesso.') {
          showMessage(SimpleModal, {
            type: MODAL_TYPES.SUCCESS,
            message: 'Validação concluída!',
          })
        }
      }
    } catch (error) {
      const { response } = error as AxiosError

      if (response?.status.toString()[0] === '4') {
        if (
          response.data.message ===
          'Atenção Este registro está sendo analisado por outro validador.'
        ) {
          showMessage(SimpleModal, {
            type: MODAL_TYPES.WARNING,
            message: (
              <>
                Este registro está sendo analisado pelo validador{' '}
                {response.data.validador} desde {response.data.data}.<br />
                Suas alterações não foram salvas
              </>
            ),
          })
        }
      }

      if (response?.status.toString()[0] === '5') {
        showSimple.error('Erro no Servidor!')
      }
    } finally {
      history.push(VALIDATOR_ANALYZE_PATIENTS)
      Loading.turnOff()
    }
  }

  return (
    <DefaultLayout title="Autorizações">
      <Container>
        <PersonExpandable
          title="Dados cadastrais do titular"
          personData={patientData}
          defaultExpanded={!dependent}
        />
        {dependent && (
          <DependentExpandable
            title="Dados cadastrais para análise"
            dependentData={dependent}
            defaultExpanded
          />
        )}
        {patientDependents?.map((dependent, index) => (
          <DependentExpandable
            title={`Dados cadastrais do dependente ${index + 1}`}
            dependentData={dependent}
            key={index}
          />
        ))}
        <AddressSeeOnePatient address={patientAddress} />
        <DocumentsSeeOnePatient
          incomeType={incomeType}
          cpf={cpf}
          hasDependentUnderAge={hasDependentUnderAge}
        />
        <ValidationSeeOnePatient
          patientId={dependent ? dependent.id : patientData.id}
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
