import React, { createContext, useContext, useMemo, useState } from 'react'

import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import axios from 'axios'

import { registerPatientToApi } from './adapters/toApi'

import { RegisterSuccess } from './messages/RegisterSuccess'
import { DocumentsNotSended } from './messages/DocumentsNotSended' 

import {
  RegistrationDataState,
  AddressState,
  DocumentsState,
  DependentsState,
  RegisterDataState,
  RegisterPatientContextData,
} from './types'

const RegisterPatientContext = createContext<RegisterPatientContextData>(
  {} as RegisterPatientContextData,
)

const RegisterPatientProvider: React.FC = ({ children }) => {
  const stepLimit = 4
  const limitOfDependents = 2

  const { showMessage, closeModal } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(2)

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
  console.log(initialRegisterData)

  const isPatientLinkedCompany = useMemo(() => {
    return !!initialRegisterData.registrationData?.company
  }, [initialRegisterData])

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

  const resetData = () => {
    setRegistrationData({})
    setAddress({})
    setDocumentsFile({} as DocumentsState)
    setDependents([])
    setStep(1)
  }

  const onFinishRegister = async () => {
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

      closeModal()
    } catch (error) {
      console.log(error)

      return showMessage(DocumentsNotSended)
    } finally {
      Loading.turnOff()
    }

    try {
      Loading.turnOn()

      const registerPatientMapped = registerPatientToApi({
        registrationData,
        address,
        documentsFile,
        dependents,
      })

      await apiPatient.post('/paciente', registerPatientMapped)

      showMessage(RegisterSuccess)
    } catch ({ response }) {
      toast.error('Erro ao finalizar cadastro!')
      return
    } finally {
      Loading.turnOff()
    }
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
        setDocumentsFile,
        setDependents,
        onFinishRegister,
        resetData,
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
