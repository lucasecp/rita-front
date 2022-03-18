import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import {
  RegisterSpecialistContextData,
  ProfissionalInfoI,
  BasicInformationI,
  ErrorsRegisterI,
} from '../types/index'

const RegisterSpecialistContext = createContext<RegisterSpecialistContextData>(
  {} as RegisterSpecialistContextData,
)

const RegisterSpecialistProvider: React.FC = ({ children }) => {
  const { showMessage, closeModal } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(1)
  const [profissionalInfo, setProfissionalInfo] = useState<ProfissionalInfoI>(
    {} as ProfissionalInfoI,
  )
  const [basicInformation, setbasicInformation] = useState<BasicInformationI>(
    {} as BasicInformationI,
  )
  const [specialtysAndDocs, setSpecialtysAndDocs] = useState<any>({})

  const [errors, setErrors] = useState<ErrorsRegisterI>({} as ErrorsRegisterI)

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
    if (step < 4) {
      setStep(step + 1)
      scrollTo(0, 0)
    }
  }

  const resetData = () => {}

  return (
    <RegisterSpecialistContext.Provider
      value={{
        isActiveStep,
        previousStep,
        nextStep,
        resetData,
        step,
        basicInformation,
        profissionalInfo,
        specialtysAndDocs,
        errors,
        setErrors,
        setProfissionalInfo,
        setbasicInformation,
        setSpecialtysAndDocs,
      }}
    >
      {children}
    </RegisterSpecialistContext.Provider>
  )
}

const useRegisterSpecialist = (): RegisterSpecialistContextData => {
  const context = useContext(RegisterSpecialistContext)

  return context
}

export { RegisterSpecialistProvider, useRegisterSpecialist }
