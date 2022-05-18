import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import { RegisterSuccess } from './messages/RegisterSuccess/index'
import {
  RegisterClinicContextData,
  AddressI,
  BasicInformationI,
  SpecialtysAndDocsType,
  ErrorsRegisterI,
} from '../types/index'
import apiAdmin from '@/services/apiAdmin'
import { toApi } from '../adapters'
import { AxiosError } from 'axios'

const RegisterClinicContext = createContext<RegisterClinicContextData>(
  {} as RegisterClinicContextData,
)

const RegisterClinicProvider: React.FC = ({ children }) => {
  const { showMessage, showSimple } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(1)

  const stepAmount = 4

  const [address, setAddress] = useState<AddressI>({} as AddressI)

  const [basicInformation, setbasicInformation] = useState<BasicInformationI>(
    {} as BasicInformationI,
  )

  const [specialtysAndDocs, setSpecialtysAndDocs] =
    useState<SpecialtysAndDocsType>({} as SpecialtysAndDocsType)

  const [photo, setPhoto] = useState<File | string>('')

  const [errors, setErrors] = useState<ErrorsRegisterI>({} as ErrorsRegisterI)

  const errorRequest = 'Erro ao realizar o cadastro'

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

  const registerData = async () => {
    try {
      const data = toApi({ ...address, ...basicInformation })

      await apiAdmin.post('/medico', data)
    } catch (error) {
      const { response } = (error as AxiosError) || {}

      if (response?.status === 409) {
        throw new Error('Especialista já cadastrado')
      }
      throw new Error(errorRequest)
    }
  }

  const registerPhoto = async () => {
    if (!photo) {
      return
    }
    try {
      const formFile = new FormData()

      formFile.append('file', photo)

      await apiAdmin.post(
        `medico/arquivo?cpf=${address}&tipoDocumento=FotoPerfil`,
        formFile,
      )
    } catch (error) {
      throw new Error('Sua foto não foi salva!')
    }
  }

  const registerSpecialist = async () => {
    try {
      Loading.turnOn()

      await registerData()

      await registerPhoto()

      showMessage(RegisterSuccess)
    } catch (error) {
      if (error instanceof Error) {
        showSimple.error(error?.message || errorRequest)
      }
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <RegisterClinicContext.Provider
      value={{
        isActiveStep,
        previousStep,
        nextStep,
        registerSpecialist,
        step,
        basicInformation,
        address,
        specialtysAndDocs,
        photo,
        errors,
        stepAmount,
        setPhoto,
        setErrors,
        setAddress,
        setbasicInformation,
        setSpecialtysAndDocs,
      }}
    >
      {children}
    </RegisterClinicContext.Provider>
  )
}

const useRegisterClinic = (): RegisterClinicContextData => {
  const context = useContext(RegisterClinicContext)

  return context
}

export { RegisterClinicProvider, useRegisterClinic }
