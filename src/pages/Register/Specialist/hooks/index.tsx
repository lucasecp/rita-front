import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import { RegisterSuccess } from './messages/RegisterSuccess/index'
import {
  RegisterSpecialistContextData,
  ProfissionalInfoI,
  BasicInformationI,
  SpecialtysAndDocsType,
  ErrorsRegisterI,
} from '../types/index'
import axios from 'axios'
import apiAdmin from '@/services/apiAdmin'
import { toApi } from '../adapters'

const RegisterSpecialistContext = createContext<RegisterSpecialistContextData>(
  {} as RegisterSpecialistContextData,
)

const RegisterSpecialistProvider: React.FC = ({ children }) => {
  const { showMessage, closeModal, showSimple } = useModal()
  const { Loading } = useLoading()

  const [step, setStep] = useState(1)
  const stepAmount = 3

  const [profissionalInfo, setProfissionalInfo] = useState<ProfissionalInfoI>(
    {} as ProfissionalInfoI,
  )

  const [basicInformation, setbasicInformation] = useState<BasicInformationI>(
    {} as BasicInformationI,
  )

  const [specialtysAndDocs, setSpecialtysAndDocs] =
    useState<SpecialtysAndDocsType>({} as SpecialtysAndDocsType)

  const [photo, setPhoto] = useState<File | null>(null)

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

  const resetData = () => {}

  const createListFormDataOfSpecialtys = () => {
    const list = []

    for (const specialty in specialtysAndDocs) {
      const formFile = new FormData()

      formFile.append('file', specialtysAndDocs[specialty].document)

      list.push({ id: specialtysAndDocs[specialty].idSpecialty, formFile })
    }
    return list
  }

  const registerDocsSpecialtys = async () => {
    const listDocs = createListFormDataOfSpecialtys()

    try {
      Loading.turnOn()

      await axios.all(
        listDocs.map((data) =>
          apiAdmin.post(
            `medico/documento?cpf=${profissionalInfo.cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${data.id}`,
            data.formFile,
          ),
        ),
      )
    } catch (error) {
      throw new Error('Erro ao salvar os documentos das especialidades')
    }
  }

  const registerData = async () => {
    try {
      Loading.turnOn()

      const data = toApi({ ...profissionalInfo, ...basicInformation })

      await apiAdmin.post('/medico', data)
    } catch (error: any) {
      if (error?.response?.status === 409) {
        throw new Error('Especialista já cadastrado')
      }
      throw new Error(errorRequest)
    }
  }

  const registerSpecialist = async () => {
    try {
      Loading.turnOn()

      await registerDocsSpecialtys()

      await registerData()

      showMessage(RegisterSuccess)
    } catch (error: any) {
      showSimple.error(error?.message || errorRequest)
    } finally {
      Loading.turnOff()
    }
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
