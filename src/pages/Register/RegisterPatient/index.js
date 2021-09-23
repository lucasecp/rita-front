import RegisterLayout from '@/components/Layout/RegisterLayout'
import React, { useEffect, useState } from 'react'
import Adress from './steps/Address'
import RegistrationData from './steps/RegistrationData'
import Document from './steps/Document'
import Dependents from './steps/Dependents'
import { Content, DotSteps, BtnGroup, BtnPrev, CustomBtn } from './style'
import { useLocation } from 'react-router'
// import { DATAFAKE } from './static'
import apiPatient from '@/services/apiPatient'
import Success from './messages/Success'
import Warning from './messages/Warning'
import Server from './messages/Error/Server'
import alreadyExists from './messages/Error/AlreadyExists'
import exitImg from '@/assets/icons/times.svg'
import { useLoading } from '@/context/useLoading'
import { useModal } from '@/context/useModal'

const RegisterPatient = () => {
  const location = useLocation()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [step, setStep] = useState(3)
  const [data, setData] = useState({})
  const [dataClientSabin, setDataClientSabin] = useState({})
  const [buttonPass, setButtonPass] = useState(false)
  const [documentFiles, setdocumentFiles] = useState()
  console.log(documentFiles)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!location.state) return
    setDataClientSabin(location.state.userData)
  }, [])

  const onUploadProgress = (ev) => {
    const progressCalculate = parseInt(Math.round((ev.loaded * 100) / ev.total))
    console.log(progressCalculate)
    setProgress(progressCalculate)
  }

  const uploadDocuments = async () => {
    Loading.turnOn()

    try {
      const formData = new FormData()

      formData.append('file', documentFiles.holdingDocumentFile)

      const response = await apiPatient.post(
        `/paciente/documento?cpf=${data.cpf}&tipoDocumeto=FotoSegurandoDoc`,
        formData,
        {
          onUploadProgress,
        }
      )

      console.log(response)
    } catch ({ response }) {
      console.log(response)
    } finally {
      Loading.turnOff()
    }

    Loading.turnOn()

    try {
      const formData = new FormData()

      formData.append('file', documentFiles.ownDocumentFile)

      const response = await apiPatient.post(
        `/paciente/documento?cpf=${data.cpf}&tipoDocumeto=Cpf`,
        formData,
        {
          onUploadProgress,
        }
      )

      console.log(response)
    } catch ({ response }) {
      console.log(response)
    } finally {
      Loading.turnOff()
    }

    if (documentFiles.proofOfIncomeFile !== '') {
      Loading.turnOn()

      try {
        const formData = new FormData()

        formData.append('file', documentFiles.proofOfIncomeFile)

        const response = await apiPatient.post(
          `/paciente/documento?cpf=${data.cpf}&tipoDocumeto=Renda`,
          formData,
          {
            onUploadProgress,
          }
        )

        console.log(response)
      } catch ({ response }) {
        console.log(response)
      } finally {
        Loading.turnOff()
      }
    }
  }

  const handleSubmit = async () => {
    try {
      Loading.turnOn()
      const response = await apiPatient.post('/paciente', data)
      if (response.status === 201) {
        showMessage(Success)
      }
    } catch ({ response }) {
      if (response.status === 500) showMessage(Server)
      if (response.status === 400)
        showMessage(alreadyExists, { message: 'Usuário já existe.' })
    } finally {
      Loading.turnOff()
    }

    uploadDocuments()
  }
  return (
    <RegisterLayout>
      <Content>
        <button onClick={() => showMessage(Warning)}>
          Sair
          <img src={exitImg} />
        </button>
        <header>
          <DotSteps active={step === 1} finish={step >= 2} />
          <DotSteps active={step === 2} finish={step >= 3} waiting={step < 2} />
          <DotSteps active={step === 3} finish={step >= 4} waiting={step < 3} />
          <DotSteps active={step === 4} waiting={step < 4} />
        </header>
        {step === 1 && (
          <RegistrationData
            setData={setData}
            setBtn={setButtonPass}
            dataClientSabin={dataClientSabin}
          />
        )}
        {step === 2 && (
          <Adress
            setData={setData}
            setBtn={setButtonPass}
            dataClientSabin={dataClientSabin}
          />
        )}
        {step === 3 && (
          <Document
            onGetDocumentFiles={setdocumentFiles}
            setButtonPass={setButtonPass}
          />
        )}
        {step === 4 && (
          <Dependents
            setData={setData}
            setBtn={setButtonPass}
            dataClientSabin={dataClientSabin}
          />
        )}
        <BtnGroup>
          {step > 1 && (
            <BtnPrev onClick={() => setStep(step - 1)}>Etapa Anterior</BtnPrev>
          )}
          {step === 4 ? (
            <CustomBtn onClick={handleSubmit}>Concluir cadastro</CustomBtn>
          ) : (
            <CustomBtn disabled={!buttonPass} onClick={() => setStep(step + 1)}>
              Próxima Etapa
            </CustomBtn>
          )}
        </BtnGroup>
      </Content>
    </RegisterLayout>
  )
}

export default RegisterPatient
