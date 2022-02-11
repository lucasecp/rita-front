import React, { createContext, useContext, useMemo, useState } from 'react'

import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import axios from 'axios'

import { registerPatientToApi } from './adapters/toApi'

import { RegisterSuccess } from './messages/RegisterSuccess'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
export interface RegistrationDataState {
  id?: number
  name?: string
  email?: string
  gender?: string
  birthdate?: string
  phone?: string
  cpf?: string
  company?: string
}

export interface AddressState {
  cep?: string
  uf?: string
  city?: string
  address?: string
  numberHome?: string
  district?: string
  complement?: string
}

export interface DocumentsState {
  holdingDocumentFile: File | string
  ownDocumentFile: File | string
  ownBackDocumentFile: File | string
  proofOfAddressFile: File | string
  proofOfIncomeFile: File | string
  selectIncome?: string
}

export interface DependentsState {
  id?: number
  name?: string
  cpf?: string
  email?: string
  gender?: string
  birthdate?: string
  phone?: string
}

export interface RegisterDataState {
  registrationData?: RegistrationDataState
  address?: AddressState
  dependents?: DependentsState[]
}

interface RegisterPatientContextData {
  cpfHolder?: string
  isPatientLinkedCompany: boolean
  limitOfDependents: number
  initialRegisterData: RegisterDataState
  onFinishRegister: () => void
  isActiveStep: (stepNumber: number) => boolean
  currentStep: number
  previousStep: () => void
  nextStep: () => void
  setInitialRegisterData: React.Dispatch<
    React.SetStateAction<RegisterDataState>
  >
  setRegistrationData: React.Dispatch<
    React.SetStateAction<RegistrationDataState | undefined>
  >
  setAddress: React.Dispatch<React.SetStateAction<AddressState | undefined>>
  setDocumentsFile: React.Dispatch<React.SetStateAction<DocumentsState>>
  setDependents: React.Dispatch<
    React.SetStateAction<DependentsState[] | undefined>
  >
}

const RegisterPatientContext = createContext<RegisterPatientContextData>(
  {} as RegisterPatientContextData,
)

const RegisterPatientProvider: React.FC = ({ children }) => {
  const stepLimit = 4
  const limitOfDependents = 2

  const { showMessage } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(1)

  const [initialRegisterData, setInitialRegisterData] = useState(
    {} as RegisterDataState,
  )

  const [registrationData, setRegistrationData] = useState(
    {} as RegistrationDataState | undefined,
  )

  const [address, setAddress] = useState({} as AddressState | undefined)

  const [documentsFile, setDocumentsFile] = useState({} as DocumentsState)

  const [dependents, setDependents] = useState(
    [] as DependentsState[] | undefined,
  )

  const isPatientLinkedCompany = useMemo(() => {
    return !!registrationData?.company
  }, [registrationData])

  const isActiveStep = (stepNumber: number) => {
    return step === stepNumber
  }

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1)
      scrollTo(0, 0)
    }
  }

  const nextStep = () => {
    if (step < stepLimit) {
      setStep(step + 1)
      scrollTo(0, 0)
    }
  }

  const onFinishRegister = async () => {
    const registerAndDocumentsSucess = false

    try {
      Loading.turnOn()

      const registerPatientMapped = registerPatientToApi({
        registrationData,
        address,
        documentsFile,
        dependents,
      })

      await apiPatient.post('/paciente', registerPatientMapped)
    } catch ({ response }) {
      toast.error('Erro ao finalizar cadastro!')
      return
    } finally {
      Loading.turnOff()
    }

    const formFile1 = new FormData()
    formFile1.append('file', documentsFile.holdingDocumentFile)
    const formFile2 = new FormData()
    formFile2.append('file', documentsFile.ownDocumentFile)
    const formFile3 = new FormData()
    formFile3.append('file', documentsFile.ownBackDocumentFile)
    const formFile4 = new FormData()
    formFile4.append('file', documentsFile.proofOfAddressFile)
    const formFile5 = new FormData()
    formFile5.append('file', documentsFile.proofOfIncomeFile)

    try {
      Loading.turnOn()

      await axios.all([
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=FotoSegurandoDoc`,
          formFile1,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=Cpf`,
          formFile2,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=DocVerso`,
          formFile3,
        ),
        !documentsFile?.proofOfAddressFile
          ? new Promise((resolve) => {
              resolve('')
            })
          : apiPatient.post(
              `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=ComprovanteResi`,
              formFile4,
            ),
        !documentsFile?.proofOfIncomeFile
          ? new Promise((resolve) => {
              resolve('')
            })
          : apiPatient.post(
              `/paciente/documento?cpf=${registrationData?.cpf}&tipoDocumento=Renda`,
              formFile5,
            ),
      ])
    } catch ({ response }) {
      toast.error('Erro ao enviar os documentos!')
    } finally {
      Loading.turnOff()
    }

    showMessage(RegisterSuccess)
  }

  return (
    <RegisterPatientContext.Provider
      value={{
        cpfHolder: registrationData?.cpf,
        isPatientLinkedCompany,
        limitOfDependents,
        initialRegisterData,
        isActiveStep,
        currentStep: step,
        previousStep,
        nextStep,
        setInitialRegisterData,
        setRegistrationData,
        setAddress,
        setDependents,
        setDocumentsFile,
        onFinishRegister,
      }}
    >
      {children}
    </RegisterPatientContext.Provider>
  )
}

const useRegisterPatient = (): RegisterPatientContextData => {
  const context = useContext(RegisterPatientContext)

  return context
}

export { RegisterPatientProvider, useRegisterPatient }
