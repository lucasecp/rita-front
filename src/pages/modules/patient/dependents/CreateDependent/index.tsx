import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { CancelAndExit } from './messages/CancelAndExit'
import { InformationsIncorrect } from './messages/InformationsIncorrect'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'

import {
  PATIENT_ADD_DOCUMENT_DEPENDENT,
  PATIENT_DEPENDENTS,
} from '@/routes/constants/namedRoutes/routes'

import { DependentData } from './components/DependentData'
import { DependentAddress } from './components/DependentAddress'

import { DependentDataType, DependentAddressType } from './types/index'

import apiPatient from '@/services/apiPatient'
import { dependentToApi } from './adapters/dependentToApi'
import { dependentFromApi } from './adapters/dependentFromApi'
import { ResponseCreateDependent } from './adapters/types'
import { useLoading } from '@/hooks/useLoading'
import { toast } from '@/styles/components/toastify'

import { Container } from './styles'

export const CreateDependent: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  const [errorMessageInformations, sendErrorMessageInformations] = useMessage()
  const [errorMessageAddress, sendErrorMessageAddress] = useMessage()

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const [dependentData, setDependentData] = useState({} as DependentDataType)
  const [dependentAddress, setDependentAddress] = useState(
    {} as DependentAddressType,
  )

  const [hasErrorInformations, setHasErrorInformations] = useState(false)
  const [hasErrorAddress, setHasErrorAddress] = useState(false)

  const onCancelCreateDependent = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(PATIENT_DEPENDENTS)
  }

  const onCreateDependent = async () => {
    sendErrorMessageInformations()
    sendErrorMessageAddress()

    if (hasErrorInformations || hasErrorAddress) {
      showMessage(InformationsIncorrect)
    } else {
      try {
        Loading.turnOn()
        const dependentMapped = dependentToApi(dependentData, dependentAddress)

        const response = await apiPatient.post<ResponseCreateDependent>(
          '/paciente/dependente',
          dependentMapped,
        )

        const dataToAddDependentDocuments = {
          id: response.data.idPaciente,
          birthdate: dependentMapped.dataNascimento,
          cpf: dependentMapped.cpf,
        }

        const dataToAddDocumentDependent = {
          dependent: dataToAddDependentDocuments,
        }

        history.push(PATIENT_ADD_DOCUMENT_DEPENDENT, dataToAddDocumentDependent)

        // const responseRegisterDependent =
        //   await apiPatient.post<ResponseCreateDependent>(
        //     '/paciente/dependente',
        //     dependentMapped,
        //   )

        // const dependentMappedFromApi = dependentFromApi(
        //   responseRegisterDependent.data,
        // )

        // await apiPatient.post(
        //   `/paciente/dependente/${dependentMappedFromApi.id}?forcarAssociacao=true`,
        // )

        // const dataToAddDocumentDependent = {
        //   dependent: {
        //     id: dependentMappedFromApi.id,
        //     birthdate: dependentMappedFromApi.birthDate,
        //     cpf: dependentMappedFromApi.cpf,
        //   },
        // }

        // history.push(PATIENT_ADD_DOCUMENT_DEPENDENT, dataToAddDocumentDependent)
      } catch {
        toast.error('Erro ao incluir dependente')
      } finally {
        Loading.turnOff()
      }
    }
  }

  return (
    <DefaultLayout title="Inclusão de Dependente">
      <Container>
        <DependentData
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setDependentData={setDependentData}
          checkHasError={errorMessageInformations}
          onGetHasError={setHasErrorInformations}
        />
        <DependentAddress
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setAddress={setDependentAddress}
          checkHasError={errorMessageAddress}
          onGetHasError={setHasErrorAddress}
        />
        <footer>
          <OutlineButton onClick={onCancelCreateDependent}>
            Cancelar
          </OutlineButton>
          <ButtonPrimary onClick={onCreateDependent}>
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
