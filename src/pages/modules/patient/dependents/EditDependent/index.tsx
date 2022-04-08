import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container, ButtonGroup } from './styles'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'
import { useHistory, useLocation } from 'react-router-dom'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
import { DependentAddress } from './components/DependentAddress'
import { DependentData } from './components/DependentData'
import { DependentDocuments } from './components/DependentDocuments'
import { Situation } from './components/Situation'
import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import { FieldsHasChangedWarning } from './messages/FieldsHasChangedWarning'
import { toast } from '@/styles/components/toastify'
import apiPatient from '@/services/apiPatient'
import { toApi } from './adapters/toApi'
import { PersonalDatas, Address, SituationType } from './types'

interface DependentLocation {
  dependent: {
    personalDatas: PersonalDatas
    address: Address
    situation: SituationType
  }
  dependentId: number
}

interface PersonalDatasError {
  gender: string
  email: string
}

interface AddressError {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
}

export const EditDependent: React.FC = () => {
  const { Loading } = useLoading()
  const location = useLocation<DependentLocation>()
  const history = useHistory()
  const { showMessage } = useModal()
  const [messageToUpdateDocuments, sendMessageToUpdateDocuments] = useMessage()

  const { personalDatas, address, situation } = location.state.dependent
  const id = location.state.dependentId

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState<number>(0)

  const [personalDatasError, setPersonalDatasError] =
    useState<PersonalDatasError>({
      gender: '',
      email: '',
    })
  const [addressError, setAddressError] = useState<AddressError>({
    cep: '',
    uf: '',
    city: '',
    address: '',
    number: '',
    district: '',
  })

  const [showErrors, setShowErrors] = useState<boolean>(false)

  const [personalDatasToSave, setPersonalDatasToSave] = useState<any>({})
  const [addressToSave, setAddressToSave] = useState<any>({})

  useEffect(() => {
    document.title = 'Rita Saúde | Edição de Dependentes'

    if (!location.state) {
      return history.push(PATIENT_DEPENDENTS)
    }
    scrollTo(0, 0)
  }, [])

  const onSave = async () => {
    setShowErrors(true)

    const hasErrorsPersonalDatas = Object.values(personalDatasError).some(
      (value) => value,
    )
    const hasErrorsAddress = Object.values(addressError).some((value) => value)

    if (!hasErrorsPersonalDatas && !hasErrorsAddress) {
      try {
        Loading.turnOn()

        const dependentToApi = toApi(personalDatasToSave, addressToSave)

        await apiPatient.put(`/paciente/dependente/${id}`, dependentToApi)
        sendMessageToUpdateDocuments()

        toast.success('Edição Realizada com Sucesso.')
        history.push(PATIENT_DEPENDENTS)
      } catch (error) {
        console.error(error)
      } finally {
        Loading.turnOff()
      }
    } else {
      scrollTo(0, 0)
    }
  }

  const onCancel = () => {
    if (anyFieldsHasChanged > 1) {
      return showMessage(FieldsHasChangedWarning)
    }
    history.push(PATIENT_DEPENDENTS)
  }

  return (
    <DefaultLayout title="Visualizar informações de dependente">
      <Container>
        <DependentData
          personalDatas={personalDatas}
          setAnyFieldsHasChanged={setAnyFieldsHasChanged}
          anyFieldsHasChanged={anyFieldsHasChanged}
          personalDatasError={personalDatasError}
          setPersonalDatasError={setPersonalDatasError}
          setPersonalDatasToSave={setPersonalDatasToSave}
          showErrors={showErrors}
        />
        <DependentAddress
          address={address}
          setAnyFieldsHasChanged={setAnyFieldsHasChanged}
          anyFieldsHasChanged={anyFieldsHasChanged}
          addressError={addressError}
          setAddressError={setAddressError}
          setAddressToSave={setAddressToSave}
          showErrors={showErrors}
        />
        <DependentDocuments
          incomeValue={personalDatas?.income}
          pacientCpf={personalDatas.cpf}
          pacientId={id}
          messageToUpdateDocuments={messageToUpdateDocuments}
        />
        <Situation data={situation} />

        <ButtonGroup>
          <ButtonLink onClick={onCancel}>Cancelar</ButtonLink>
          <OutlineButton onClick={onSave}>Salvar</OutlineButton>
        </ButtonGroup>
      </Container>
    </DefaultLayout>
  )
}
