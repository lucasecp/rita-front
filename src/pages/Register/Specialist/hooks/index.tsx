import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import {
  RegisterSpecialistContextData,
  ProfissionalInfoI,
  BasicInformationI,
  SpecialtysAndDocsType,
  ErrorsRegisterI,
} from '../types/index'

const RegisterSpecialistContext = createContext<RegisterSpecialistContextData>(
  {} as RegisterSpecialistContextData,
)

const RegisterSpecialistProvider: React.FC = ({ children }) => {
  const { showMessage, closeModal } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(1)
  const stepAmount = 3

  const [profissionalInfo, setProfissionalInfo] = useState<ProfissionalInfoI>(
    {} as ProfissionalInfoI,
  )

  const [basicInformation, setbasicInformation] = useState<BasicInformationI>(
    {} as BasicInformationI,
  )

  const [specialtysAndDocs, setSpecialtysAndDocs] = useState<
    SpecialtysAndDocsType[]
  >([] as SpecialtysAndDocsType[])

  const [photo, setPhoto] = useState<File | null>(null)

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
  console.log(profissionalInfo, basicInformation, specialtysAndDocs,errors)

  const registerSpecialist = async () => {
  }

  return (
    <RegisterSpecialistContext.Provider
      value={{
        isActiveStep,
        previousStep,
        nextStep,
        resetData,
        registerSpecialist,
        step,
        basicInformation,
        profissionalInfo,
        specialtysAndDocs,
        photo,
        errors,
        stepAmount,
        setPhoto,
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
