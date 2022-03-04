import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container, ButtonGroup } from './styles'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory, useLocation } from 'react-router'
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
import convertImageFromApiToBase64 from '@/helpers/convertImageFromApiToBase64'

interface PersonalDatas {
  name: string
  cpf: string
  birthDate: string
  gender: string
  email: string
  phone: string
  documents: any
}

interface Address {
  cep: string
  uf: string
  city: string
  addressDep: string
  number: string
  district: string
  complement: string
}

interface Dependent {
  personalDatas: PersonalDatas
  address: Address
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
  const location = useLocation()
  const history = useHistory()
  const { showMessage } = useModal()

  const dependent: Dependent = location.state.dependent
  const id: number = location.state.id
  const dependentDocumentName: string = location.state.dependentDocumentName
  const dependentDocument = location.state.dependentDocument

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
          `/paciente/documento?cpf=${dependent.personalDatas.cpf}&tipoDocumento=Renda`,
          formFile1,
        )
      } catch (error) {
        console.log(error)
      }
    }

    if (
      // !formFile1 == &&
      !hasErrorsPersonalDatas &&
      !hasErrorsAddress
    ) {
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
      } catch ({ response }) {
        toast.error(response.data.message)
      } finally {
        Loading.turnOff()
      }
    } else {
      scrollTo(0, 0)
    }
  }

  const onCancel = () => {
    if (anyFieldsHasChanged > 2) {
      return showMessage(FieldsHasChangedWarning)
    }
    history.push(PATIENT_DEPENDENTS)
  }

  return (
    <DefaultLayout title="Visualizar informações de dependente">
      <Container>
        <DependentData
          personalDatas={dependent.personalDatas}
          setAnyFieldsHasChanged={setAnyFieldsHasChanged}
          anyFieldsHasChanged={anyFieldsHasChanged}
          personalDatasError={personalDatasError}
          setPersonalDatasError={setPersonalDatasError}
          setPersonalDatasToSave={setPersonalDatasToSave}
          showErrors={showErrors}
        />
        <DependentAddress
          address={dependent.address}
          setAnyFieldsHasChanged={setAnyFieldsHasChanged}
          anyFieldsHasChanged={anyFieldsHasChanged}
          addressError={addressError}
          setAddressError={setAddressError}
          setAddressToSave={setAddressToSave}
          showErrors={showErrors}
        />
        <Documents
          data={dependent.personalDatas}
          setAnyFieldsHasChanged={setAnyFieldsHasChanged}
          dependentDocumentName={dependentDocumentName}
          dependentDocument={dependentDocument}
          // setDocumentError={setDocumentError}
          showErrors={showErrors}
          documentToSave={documentToSave}
          setDocumentToSave={setDocumentToSave}
        />
        <Situation data={dependent.personalDatas} />

        <ButtonGroup>
          <ButtonLink onClick={onCancel}>Voltar</ButtonLink>
          <OutlineButton onClick={onSave}>Salvar</OutlineButton>
        </ButtonGroup>
      </Container>
    </DefaultLayout>
  )
}
