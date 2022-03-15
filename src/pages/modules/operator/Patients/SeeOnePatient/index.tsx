import { useEffect, useMemo, useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { Container } from './styles'

import PersonExpandable from './components/PersonExpandable'
import { DependentExpandable } from './components/DependentExpandable'
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
import { OPERATOR_ANALYZE_PATIENT } from '@/routes/constants/namedRoutes/routes'
import { getDataMapped, getDependentMapped } from './helpers/getDataMapped'
import { toast } from '@/styles/components/toastify'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import { differenceInYears, parse } from 'date-fns'

import {
  fromApiDependents,
  fromApiPatientAddress,
  fromApiPatientData,
  fromApiPatientTable,
  fromApiPatientStatusLimit,
  fromApiValidations,
} from './adapters/fromApi'
import {
  PatientData,
  PatientAddress,
  Dependent,
  Validations,
  ResponseApi,
  PatientStatusLimit,
} from './types/index'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import ResetStatusOnePatient from './components/ResetStatusOnePatient'
import { CancelOrSave } from './messages/CancelOrSave'

export const SeeOnePatient: React.FC = () => {
  const history = useHistory()
  const { cpf } = useLocation().state
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [disableSaveButton, setDisableSaveButton] = useState(true)

  const [patientData, setPatientData] = useState({} as PatientData)

  const [patientDependents, setPatientDependents] = useState<
    Dependent[] | undefined
  >([])
  const [patientAddress, setPatientAddress] = useState({} as PatientAddress)
  const [patientStatusLimit, setPatientStatusLimit] = useState(
    {} as PatientStatusLimit,
  )
  const [patientStatusLimitInitial, setPatientStatusLimitInitial] = useState(
    {} as PatientStatusLimit,
  )
  const [dependent, setDependent] = useState({} as PatientData | undefined)
  const [incomeDocumentType, setIncomeDocumentType] = useState('')

  const [validations, setValidations] = useState({} as Validations)
  const [table, setTable] = useState('')
  const [isDependentMinorAge, setIsDependentMinorAge] = useState(false)
  const [confirmSave, setConfirmSave] = useState(false)

  useEffect(() => {
    document.title = 'Rita Saúde | Pacientes'

    if (!cpf) {
      history.push(OPERATOR_ANALYZE_PATIENT)
      return
    }

    const loadPatientInformations = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get<ResponseApi>(
          `/paciente/cpf?cpf=${cpf}`,
        )

        const dateParsed = parse(data.dataNascimento, 'dd/MM/yyyy', new Date())
        const age = differenceInYears(new Date(), dateParsed)

        const titularObjectIsNull = Array.isArray(data.titular)

        if (titularObjectIsNull) {
          setIsDependentMinorAge(false)
        } else if (data.titular && !titularObjectIsNull && age < 18) {
          setIsDependentMinorAge(true)
        } else {
          setIsDependentMinorAge(false)
        }
        const patientStatusMapped = fromApiPatientStatusLimit(data)
        const patientDataMapped = fromApiPatientData(data)
        const patientDependentsMapped = fromApiDependents(data)
        const patientAddressMapped = fromApiPatientAddress(data)
        const patientTableMapped = fromApiPatientTable(data)

        setPatientStatusLimit(patientStatusMapped)
        setPatientStatusLimitInitial(patientStatusMapped)
        setPatientData(patientDataMapped.patientData)
        setDependent(patientDataMapped?.dependentData)
        setPatientDependents(patientDependentsMapped)
        setPatientAddress(patientAddressMapped)
        setIncomeDocumentType(data.renda)
        setTable(patientTableMapped)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    loadPatientInformations()
  }, [])

  useEffect(() => {
    const loadValidationInformations = async () => {
      try {
        Loading.turnOn()

        let idToValidate

        if (dependent?.id) {
          idToValidate = dependent.id
        } else {
          idToValidate = patientData.id
        }

        const response = await apiPatient.get(
          `/paciente/${idToValidate}/validar`,
        )

        const validationsMapped = fromApiValidations(response.data[0], table)

        setValidations(validationsMapped)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }

    if (patientData?.id || dependent?.id) {
      loadValidationInformations()
    }
  }, [dependent?.id, patientData?.id, table])

  const showValidation = useMemo(() => {
    let mustShow

    // Se for dependente, e a validação for do dependente
    if (dependent && dependent.id === validations.pacientId) {
      mustShow = true
    } else {
      mustShow = false
    }

    // Se for titular, e a validação for do titular
    if (!dependent && validations.pacientId === patientData.id) {
      mustShow = true
    }

    // Se o objeto de validação estiver vazio
    if (isObjectEmpty(validations)) {
      mustShow = false
    }

    return mustShow
  }, [dependent?.id, patientData?.id, validations])

  useEffect(() => {
    if (patientDependents) {
      const dependentErrorExists = patientDependents.some(
        (dependent) => dependent?.error,
      )

      if (dependentErrorExists || patientData.error) {
        setDisableSaveButton(true)
      } else {
        setDisableSaveButton(false)
      }
    }
  }, [patientData, patientDependents])

  const onDependentsChange = (personDataReceived: Dependent, index: number) => {
    if (patientDependents) {
      const patientDependentsTemporary = patientDependents

      patientDependentsTemporary[index] = personDataReceived

      setPatientDependents([...patientDependentsTemporary])
    }
  }

  const onComeBack = () => {
    showMessage(ComeBack, { idPatient: patientData.id })
  }

  const onSavePatientData = async () => {
    let patientId
    let patientDataToUpdate

    if (dependent) {
      patientId = dependent.id

      patientDataToUpdate = getDependentMapped(
        dependent,
        patientAddress,
        patientStatusLimit,
      )
    } else {
      patientId = patientData.id

      patientDataToUpdate = getDataMapped(
        patientData,
        patientDependents,
        patientAddress,
        patientStatusLimit,
      )
    }

    try {
      Loading.turnOn()

      const response = await apiPatient.put(
        `/paciente/${patientId}`,
        patientDataToUpdate,
      )

      if (response.status === 200) {
        if (response.data.mensagem === 'Sucesso') {
          toast.success('Dados atualizados com sucesso.')
          history.push(OPERATOR_ANALYZE_PATIENT)
        }
      }
    } catch ({ response }) {
    } finally {
      Loading.turnOff()
    }
  }

  const confirmSavePatientData = async () => {
    if (
      (patientStatusLimit.status === 'P' ||
        patientStatusLimit.status === 'I') &&
      patientStatusLimitInitial.status === 'A'
    ) {
      showMessage(CancelOrSave, { setConfirmSave })
    } else {
      onSavePatientData()
    }
  }

  useEffect(() => {
    const verifyConfirmSave = async () => {
      if (confirmSave) {
        await onSavePatientData()
      }
    }
    verifyConfirmSave()
  }, [confirmSave])

  return (
    <DefaultLayout title="Pacientes">
      <Container>
        {patientData.cpf && (
          <PersonExpandable
            title="Dados cadastrais do titular"
            personData={patientData}
            setPersonData={setPatientData}
            defaultExpanded={!!dependent}
            viewMode={!!dependent}
          />
        )}
        {dependent?.id && (
          <DependentExpandable
            title="Dados cadastrais para análise"
            dependentData={dependent}
            setDependentData={setDependent}
            defaultExpanded
            allDependents={patientDependents}
          />
        )}
        {patientDependents?.map((dependent, index) => (
          <DependentExpandable
            title={`Dados cadastrais do dependente ${index + 1}`}
            allDependents={patientDependents}
            dependentData={dependent}
            setDependentData={(personDataReceived: Dependent) =>
              onDependentsChange(personDataReceived, index)
            }
            key={index}
          />
        ))}
        {!isObjectEmpty(patientAddress) && (
          <AddressSeeOnePatient
            address={patientAddress}
            setAddress={setPatientAddress}
          />
        )}
        <DocumentsSeeOnePatient
          incomeDocumentType={incomeDocumentType}
          cpf={cpf}
          isDependentMinorAge={isDependentMinorAge}
        />

        {showValidation && (
          <ValidationSeeOnePatient validations={validations} />
        )}

        <ResetStatusOnePatient
          patientStatus={patientStatusLimit}
          setpatientStatus={setPatientStatusLimit}
        />
        <footer>
          <ButtonLink onClick={onComeBack}>Voltar</ButtonLink>
          <OutlineButton
            disabled={disableSaveButton}
            onClick={confirmSavePatientData}
          >
            Salvar
          </OutlineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
