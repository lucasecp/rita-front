import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

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
import { AxiosError } from 'axios'

const RegisterSpecialistContext = createContext<RegisterSpecialistContextData>(
  {} as RegisterSpecialistContextData,
)

const RegisterSpecialistProvider: React.FC = ({ children }) => {
  const { showMessage, showSimple } = useModal()
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

  const createListFormDataOfSpecialtys = () => {
    const list = []

    for (const specialty in specialtysAndDocs) {
      if (!specialtysAndDocs[specialty].document) {
        continue
      }

      const formFile = new FormData()

      formFile.append('file', specialtysAndDocs[specialty].document)

      list.push({ id: specialtysAndDocs[specialty].idSpecialty, formFile })
    }
    return list
  }

  const registerDocsSpecialtys = async () => {
    const listDocs = createListFormDataOfSpecialtys()
    console.log(listDocs)

    try {
      await axios.all(
        listDocs.map((data) =>
          apiAdmin.post(
            `medico/arquivo?cpf=${profissionalInfo.cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${data.id}`,
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
      const data = toApi({ ...profissionalInfo, ...basicInformation })

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
    try {
      const formFile = new FormData()

      formFile.append('file', photo)

      await apiAdmin.post(
        `medico/arquivo?cpf=${profissionalInfo.cpf}&tipoDocumento=FotoPerfil`,
        formFile,
      )
    } catch (error) {
      throw new Error('Foto não enviada')
    }
  }

  const registerSpecialist = async () => {
    try {
      Loading.turnOn()

      await registerDocsSpecialtys()

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
    <RegisterSpecialistContext.Provider
      value={{
        isActiveStep,
        previousStep,
        nextStep,
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
