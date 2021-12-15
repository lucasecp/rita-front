import RegisterLayout from '@/components/Layout/RegisterLayout'
import React, { useEffect, useState } from 'react'
import { Address } from './steps/Address'
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
import exitImg from '@/assets/icons/times.svg'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import axios from 'axios'
import SimpleModal, { MODAL_TYPES } from '@/components/Modal/SimpleModal'
import DocumentNoSent from './messages/Success/DocumentNotSent'

const status = {
  SUCCESS: 'success',
  SERVER_ERROR: 'server_error',
  ALREADY_EXISTS: 'already_exists',
  BAD_REQUEST_DOCUMENTS: 'bad_request_documents',
}

const RegisterPatient = () => {
  let responseApiStatus = ''

  const location = useLocation()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [step, setStep] = useState(1)
  const [data, setData] = useState({})

  const [dataClientSabin, setDataClientSabin] = useState({})
  const [buttonPass, setButtonPass] = useState(false)
  const [documentFiles, setdocumentFiles] = useState({})

  useEffect(() => {
    document.title = 'Rita Saúde | Cadastro'
    if (!location.state) return
    setDataClientSabin(location.state.userData)
  }, [])

  const formatDocumentFiles = () => {
    if (documentFiles.selectIncome === 'no_income') return 'NaopossuoRenda'
    if (documentFiles.selectIncome === 'one_half')
      return 'AteUmSalarioMinimoEMeio'
    if (documentFiles.selectIncome === 'more_one_half')
      return 'AcimaDeUmSalarioMinimoEMeio'
  }

  const handleSubmit = async () => {
    const formFile1 = new FormData()
    formFile1.append('file', documentFiles.holdingDocumentFile)

    const formFile2 = new FormData()
    formFile2.append('file', documentFiles.ownDocumentFile)

    const formFile3 = new FormData()
    formFile3.append('file', documentFiles.proofOfIncomeFile)

    Loading.turnOn()
    try {
      const response = await apiPatient.post('/paciente', {
        ...data,
        renda: formatDocumentFiles(),
      })
      if (response.status === 201) {
        responseApiStatus = status.SUCCESS
      }
    } catch ({ response }) {
      if (response.status === 400) {
        responseApiStatus = status.ALREADY_EXISTS
      }
      if (response.status === 500) {
        responseApiStatus = status.SERVER_ERROR
      }
    }

    try {
      await axios.all([
        apiPatient.post(
          `/paciente/documento?cpf=${data.cpf}&tipoDocumento=FotoSegurandoDoc`,
          formFile1
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${data.cpf}&tipoDocumento=Cpf`,
          formFile2
        ),
        !documentFiles.proofOfIncomeFile
          ? ''
          : apiPatient.post(
              `/paciente/documento?cpf=${data.cpf}&tipoDocumento=Renda`,
              formFile3
            ),
      ])
    } catch ({ response }) {
      if (
        (response.status === 500 || response.status === 400) &&
        responseApiStatus === status.SUCCESS
      ) {
        responseApiStatus = status.BAD_REQUEST_DOCUMENTS
      }
    } finally {
      Loading.turnOff()

      if (responseApiStatus === status.ALREADY_EXISTS) {
        showMessage(SimpleModal, {
          type: MODAL_TYPES.ERROR,
          message: 'Paciente já cadastrado.',
        })
      }
      if (responseApiStatus === status.SERVER_ERROR) {
        showMessage(Server)
      }
      if (responseApiStatus === status.BAD_REQUEST_DOCUMENTS) {
        showMessage(DocumentNoSent)
      }
      if (responseApiStatus === status.SUCCESS) {
        showMessage(Success)
      }
    }
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
            setButtonPass={setButtonPass}
            dataClientSabin={dataClientSabin}
            newData={data}
          />
        )}
        {step === 2 && (
          <Address
            setData={setData}
            setButtonPass={setButtonPass}
            dataClientSabin={dataClientSabin}
            newData={data}
          />
        )}
        {step === 3 && (
          <Document
            onGetDocumentFiles={setdocumentFiles}
            setButtonPass={setButtonPass}
            savedFiles={documentFiles}
          />
        )}
        {step === 4 && (
          <Dependents
            newData={data}
            setData={setData}
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
