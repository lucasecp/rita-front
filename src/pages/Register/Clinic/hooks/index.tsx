import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import apiAdmin from '@/services/apiAdmin'
import { AxiosError } from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { toApi } from '../adapters'
import {
  AddressI,
  AdministratorI,
  BasicInformationI,
  ErrorsRegisterI,
  RegisterClinicContextData,
  TechnicianI,
} from '../types/index'
import { RegisterSuccess } from './messages/RegisterSuccess/index'

const RegisterClinicContext = createContext<RegisterClinicContextData>(
  {} as RegisterClinicContextData,
)

const RegisterClinicProvider: React.FC = ({ children }) => {
  const { showMessage, showSimple } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(3)

  const stepAmount = 4

  const [address, setAddress] = useState<AddressI>({} as AddressI)

  const [basicInformation, setbasicInformation] = useState<BasicInformationI>(
    {} as BasicInformationI,
  )

  const [technician, setTechnician] = useState<TechnicianI>({} as TechnicianI)
  const [administrator, setAdministrator] = useState<AdministratorI>(
    {} as AdministratorI,
  )

  const [photo, setPhoto] = useState<File | string>('')

  const [errors, setErrors] = useState<ErrorsRegisterI>({} as ErrorsRegisterI)

  const errorRequest = 'Erro ao realizar o cadastro'

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
  console.log(basicInformation, address, technician, administrator)

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
        previousStep,
        nextStep,
        registerSpecialist,
        step,
        basicInformation,
        address,
        technician,
        administrator,
        photo,
        errors,
        stepAmount,
        setPhoto,
        setErrors,
        setAddress,
        setbasicInformation,
        setTechnician,
        setAdministrator,
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
