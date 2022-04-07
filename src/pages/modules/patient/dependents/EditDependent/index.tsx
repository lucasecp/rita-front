import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container, ButtonGroup } from './styles'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory, useLocation } from 'react-router-dom'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
import { DependentAddress } from './components/DependentAddress'
import { DependentData } from './components/DependentData'
import { Documents } from './components/Documents'
import { Situation } from './components/Situation'
import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import { FieldsHasChangedWarning } from './messages/FieldsHasChangedWarning'
import { toast } from '@/styles/components/toastify'
import apiPatient from '@/services/apiPatient'

interface PersonalDatas {
  name: string
  cpf: string
  gender: string
  birthdate: string
  phone: string
  email: string
  status: string
  income: string
}

interface Address {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
  complement: string
}

interface SituationType {
  plan: {
    name: string
    startDate: string
    endDate: string
  }
  table: string
}

interface DependentLocation {
  dependent: {
    personalDatas: PersonalDatas
    address: Address
    documents: any
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

  const { personalDatas, address, documents, situation } =
    location.state.dependent
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

  // const [documentError, setDocumentError] = useState(false)

  const [showErrors, setShowErrors] = useState<boolean>(false)

  const [personalDatasToSave, setPersonalDatasToSave] = useState<any>({})
  const [addressToSave, setAddressToSave] = useState<any>({})
  const [documentToSave, setDocumentToSave] = useState<File | string>('')

  useEffect(() => {
    if (!location.state) {
      return history.push(PATIENT_DEPENDENTS)
    }
    scrollTo(0, 0)
  }, [])

  document.title = 'Rita Saúde | Edição de Dependentes'

  const onSave = async () => {
    setShowErrors(true)

    const hasErrorsPersonalDatas = Object.values(personalDatasError).some(
      (value) => value,
    )
    const hasErrorsAddress = Object.values(addressError).some((value) => value)

    if (documentToSave) {
      const formFile1 = new FormData()
      formFile1.append('file', documentToSave)
      try {
        await apiPatient.post(
          `/paciente/documento?cpf=${personalDatas.cpf}&tipoDocumento=Renda`,
          formFile1,
        )

        await apiPatient.patch(
          `/paciente/dependente/documento/confirmar`,
          null,
          {
            params: { cpf: personalDatas.cpf },
          },
        )
      } catch (error) {
        console.log(error)
      }
    }

    if (!hasErrorsPersonalDatas && !hasErrorsAddress) {
      try {
        Loading.turnOn()

        const dependentData = {
          sexo: personalDatasToSave.gender,
          email: personalDatasToSave.email,
          endereco: {
            cep: addressToSave.cep,
            logradouro: addressToSave.addressDep,
            numero: addressToSave.number,
            complemento: addressToSave.complement,
            bairro: addressToSave.district,
            cidade: addressToSave.city,
            uf: addressToSave.uf,
          },
        }

        await apiPatient.put(`/paciente/dependente/${id}`, dependentData)

        toast.success('Edição Realizada com Sucesso.')
        history.push(PATIENT_DEPENDENTS)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.message)
        } else {
          if (error instanceof Error) {
            toast.error(error.message)
          }

          console.error(error)
        }
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

  console.log('Location: ', location)

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
        <Documents
          incomeValue={personalDatas?.income}
          documentToSave={documentToSave}
          setDocumentToSave={setDocumentToSave}
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
