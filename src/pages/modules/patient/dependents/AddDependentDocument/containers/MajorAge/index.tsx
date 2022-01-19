import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import { HoldingDocument } from './documents/HoldingDocument'
import { OwnFrontDocument } from './documents/OwnFrontDocument'
import { OwnBackDocument } from './documents/OwnBackDocument'
import { ProofOfIncome } from './documents/ProofOfIncome'
import { ProofOfAddress } from './documents/ProofOfAddress'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { ComeBack } from './messages/ComeBack'
import { useHistory } from 'react-router-dom'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
import { toast } from 'react-toastify'
import apiPatient from '@/services/apiPatient'
import axios, { AxiosResponse } from 'axios'
import { useLoading } from '@/hooks/useLoading'

interface MajorAgeProps {
  dependent: {
    id: number
    cpf: string
  }
}

interface ErrorState {
  holdingDocument: string
  ownDocument: string
  ownBackDocument: string
  selectIncome: string
}

export const MajorAge: React.FC<MajorAgeProps> = ({ dependent }) => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [holdingDocumentFile, setHoldingDocumentFile] = useState<File | string>(
    '',
  )
  const [ownFrontDocumentFile, setOwnDocumentFile] = useState<File | string>('')
  const [ownBackDocumentFile, setOwnBackDocumentFile] = useState<File | string>(
    '',
  )
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState<File | string>('')
  const [proofOfAddressFile, setProofOfAddressFile] = useState<File | string>(
    '',
  )
  const [selectIncome, setSelectIncome] = useState('')

  const [errors, setErrors] = useState({} as ErrorState)

  const onCancelAddDependentDocuments = () => {
    if (
      holdingDocumentFile ||
      ownFrontDocumentFile ||
      ownBackDocumentFile ||
      proofOfIncomeFile ||
      proofOfAddressFile ||
      selectIncome
    ) {
      return showMessage(ComeBack)
    }

    history.push(PATIENT_DEPENDENTS)
  }

  const onSaveDocumentDependent = async () => {
    setErrors({} as ErrorState)

    if (holdingDocumentFile === '') {
      setErrors((prevState) => ({
        ...prevState,
        holdingDocument:
          'O envio da sua foto segurando o documento é obrigatório.',
      }))
      scrollTo(0, 0)
      return
    }

    if (ownFrontDocumentFile === '') {
      setErrors((prevState) => ({
        ...prevState,
        ownDocument:
          'O envio da foto do documento de identificação é obrigatório.',
      }))
      scrollTo(0, 0)
      return
    }

    if (ownBackDocumentFile === '') {
      setErrors((prevState) => ({
        ...prevState,
        ownBackDocument:
          'O envio da foto do documento de identificação é obrigatório.',
      }))
      scrollTo(0, 0)
      return
    }

    if (selectIncome === '') {
      setErrors((prevState) => ({
        ...prevState,
        selectIncome: 'A escolha da sua faixa de renda é obrigatório.',
      }))
      scrollTo(0, 0)
    }

    const formFile1 = new FormData()
    formFile1.append('file', holdingDocumentFile)
    const formFile2 = new FormData()
    formFile2.append('file', ownFrontDocumentFile)
    const formFile3 = new FormData()
    formFile3.append('file', ownBackDocumentFile)
    const formFile4 = new FormData()
    formFile4.append('file', proofOfAddressFile)
    const formFile5 = new FormData()
    formFile5.append('file', proofOfIncomeFile)

    try {
      await axios.all([
        apiPatient.post(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=FotoSegurandoDoc`,
          formFile1,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Cpf`,
          formFile2,
        ),
        apiPatient.post(
          `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=DocVerso`,
          formFile3,
        ),
        !proofOfAddressFile
          ? new Promise(() => null)
          : apiPatient.post(
              `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=ComprovanteResi`,
              formFile4,
            ),
        !proofOfIncomeFile
          ? new Promise(() => null)
          : apiPatient.post(
              `/paciente/documento?cpf=${dependent.cpf}&tipoDocumento=Renda`,
              formFile5,
            ),
      ])

      const response = await apiPatient.patch(
        `/paciente/dependente/documento/confirmar`,
        formFile5,
        {
          params: { cpf: dependent.cpf },
        },
      )

      console.log(response)
    } catch ({ response }) {
      toast.error('Erro ao enviar os documentos!')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <div>
        <h1>Atualização de Documentos</h1>
        <HoldingDocument
          onGetFile={setHoldingDocumentFile}
          holdingDocumentFile={holdingDocumentFile}
          error={errors.holdingDocument}
        />

        <OwnFrontDocument
          hasPreviousDocument={!!holdingDocumentFile}
          onGetFile={setOwnDocumentFile}
          ownFrontDocumentFile={ownFrontDocumentFile}
          error={errors.ownDocument}
        />

        <OwnBackDocument
          hasPreviousDocument={!!ownFrontDocumentFile}
          onGetFile={setOwnBackDocumentFile}
          ownBackDocumentFile={ownBackDocumentFile}
          error={errors.ownBackDocument}
        />

        <ProofOfAddress
          hasPreviousDocument={
            !!holdingDocumentFile &&
            !!ownFrontDocumentFile &&
            !!ownBackDocumentFile
          }
          onGetFile={setProofOfAddressFile}
          proofOfAddressFile={proofOfAddressFile}
        />

        <ProofOfIncome
          hasPreviousDocument={
            !!holdingDocumentFile &&
            !!ownFrontDocumentFile &&
            !!ownBackDocumentFile
          }
          onGetFile={setProofOfIncomeFile}
          proofOfIncomeFile={proofOfIncomeFile}
          onSelectIncome={setSelectIncome}
          selectIncome={selectIncome}
          error={errors.selectIncome}
        />
      </div>
      <footer>
        <OutlineButton onClick={onCancelAddDependentDocuments}>
          Cancelar
        </OutlineButton>
        <ButtonPrimary onClick={onSaveDocumentDependent}>Salvar</ButtonPrimary>
      </footer>
    </Container>
  )
}
