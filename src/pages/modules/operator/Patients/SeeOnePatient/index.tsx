import { useEffect, useState } from 'react'

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
import { getDataMapped } from './helpers/getDataMapped'
import { toast } from '@/styles/components/toastify'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import { differenceInYears, parse } from 'date-fns'

import {
  fromApiDependents,
  fromApiPatientAddress,
  fromApiPatientData,
  fromApiPatientTable,
} from './adapters/fromApi'
import {
  PatientData,
  PatientAddress,
  Dependent,
  Validations,
  ResponseApi,
} from './types/index'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'

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
  const [dependent, setDependent] = useState({} as PatientData | undefined)
  const [incomeDocumentType, setIncomeDocumentType] = useState('')

  const [validations, setValidations] = useState({} as Validations)
  const [table, setTable] = useState('')
  const [isDependentMinorAge, setIsDependentMinorAge] = useState(false)

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

        const patientDataMapped = fromApiPatientData(data)
        const patientDependentsMapped = fromApiDependents(data)
        const patientAddressMapped = fromApiPatientAddress(data)
        const patientTableMapped = fromApiPatientTable(data)

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

        const response = await apiPatient.get(
          `/paciente/${patientData.id}/validar`,
        )

        const validationsFromApi = response.data[0]
        const validationsMapped = {
          documentOk: validationsFromApi.documentoOk ? 'yes' : 'no',
          resonDocumentNotOk: validationsFromApi.motivoDocumento || '',
          incomeOk: validationsFromApi.rendaBaixa ? 'yes' : 'no',
          validatorName: validationsFromApi.nomeValidador,
          dateAndHour: formateDateAndHour(
            validationsFromApi.dataValidacao,
            ' às ',
          ),
          status: validationsFromApi.status,
          table,
        }

        setValidations(validationsMapped)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }

    if (patientData?.id) {
      loadValidationInformations()
    }
  }, [patientData?.id, table])

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
    const dataToSend = getDataMapped(
      patientData,
      patientDependents,
      patientAddress,
    )

    try {
      Loading.turnOn()

      const response = await apiPatient.put('/paciente/operador', dataToSend)

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
            defaultExpanded
            setDependentData={() => {}}
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
