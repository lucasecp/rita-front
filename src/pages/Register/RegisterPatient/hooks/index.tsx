import { SimpleModal, MODAL_TYPES } from '@/components/Modal/SimpleModal'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import apiPatient from '@/services/apiPatient'
import axios from 'axios'
import React, { createContext, useContext, useMemo, useState } from 'react'
import Server from '../messages/Error/Server'
import Success from '../messages/Success'
import DocumentNoSent from '../messages/Success/DocumentNotSent'

const status = {
  SUCCESS: 'success',
  SERVER_ERROR: 'server_error',
  ALREADY_EXISTS: 'already_exists',
  BAD_REQUEST_DOCUMENTS: 'bad_request_documents',
}

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

interface DocumentsState {
  holdingDocumentFile: File | string
  ownDocumentFile: File | string
  ownBackDocumentFile: File | string
  proofOfAddressFile: File | string
  proofOfIncomeFile: File | string
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
  setDocumentsFile: React.Dispatch<
    React.SetStateAction<DocumentsState | undefined>
  >
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

  const [documentsFile, setDocumentsFile] = useState(
    {} as DocumentsState | undefined,
  )

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
    console.log(dependents)

    // const formFile1 = new FormData()
    // formFile1.append('file', documentFiles.holdingDocumentFile)
    // const formFile2 = new FormData()
    // formFile2.append('file', documentFiles.ownDocumentFile)
    // const formFile3 = new FormData()
    // formFile3.append('file', documentFiles.ownBackDocumentFile)
    // const formFile4 = new FormData()
    // formFile4.append('file', documentFiles.proofOfAddressFile)
    // const formFile5 = new FormData()
    // formFile5.append('file', documentFiles.proofOfIncomeFile)
    // const formatDocumentFiles = () => {
    //   if (documentFiles.selectIncome === 'no_income') return 'NaopossuoRenda'
    //   if (documentFiles.selectIncome === 'one_half')
    //     return 'AteUmSalarioMinimoEMeio'
    //   if (documentFiles.selectIncome === 'more_one_half')
    //     return 'AcimaDeUmSalarioMinimoEMeio'
    // }
    // let responseApiStatus = ''
    // try {
    //   Loading.turnOn()
    //   const response = await apiPatient.post('/paciente', {
    //     ...data,
    //     renda: formatDocumentFiles(),
    //   })
    //   if (response.status === 201) {
    //     responseApiStatus = status.SUCCESS
    //   }
    // } catch ({ response }) {
    //   if (response.status === 400) {
    //     responseApiStatus = status.ALREADY_EXISTS
    //   }
    //   if (response.status === 500) {
    //     responseApiStatus = status.SERVER_ERROR
    //   }
    // }
    // try {
    //   await axios.all([
    //     apiPatient.post(
    //       `/paciente/documento?cpf=${data.cpf}&tipoDocumento=FotoSegurandoDoc`,
    //       formFile1,
    //     ),
    //     apiPatient.post(
    //       `/paciente/documento?cpf=${data.cpf}&tipoDocumento=Cpf`,
    //       formFile2,
    //     ),
    //     apiPatient.post(
    //       `/paciente/documento?cpf=${data.cpf}&tipoDocumento=DocVerso`,
    //       formFile3,
    //     ),
    //     !documentFiles.proofOfAddressFile
    //       ? ''
    //       : apiPatient.post(
    //           `/paciente/documento?cpf=${data.cpf}&tipoDocumento=ComprovanteResi`,
    //           formFile4,
    //         ),
    //     !documentFiles.proofOfIncomeFile
    //       ? ''
    //       : apiPatient.post(
    //           `/paciente/documento?cpf=${data.cpf}&tipoDocumento=Renda`,
    //           formFile5,
    //         ),
    //   ])
    // } catch ({ response }) {
    //   if (
    //     (response.status === 500 || response.status === 400) &&
    //     responseApiStatus === status.SUCCESS
    //   ) {
    //     responseApiStatus = status.BAD_REQUEST_DOCUMENTS
    //   }
    // } finally {
    //   Loading.turnOff()
    // }
    // if (responseApiStatus === status.ALREADY_EXISTS) {
    //   showMessage(SimpleModal, {
    //     type: MODAL_TYPES.ERROR,
    //     message: 'Paciente já cadastrado.',
    //   })
    // }
    // if (responseApiStatus === status.SERVER_ERROR) {
    //   showMessage(Server)
    // }
    // if (responseApiStatus === status.BAD_REQUEST_DOCUMENTS) {
    //   showMessage(DocumentNoSent)
    // }
    // if (responseApiStatus === status.SUCCESS) {
    //   showMessage(Success)
    // }
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
