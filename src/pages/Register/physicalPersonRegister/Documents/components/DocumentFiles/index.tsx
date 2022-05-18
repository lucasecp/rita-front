import React, { useEffect, useState } from 'react'

import { HoldingDocument } from './containers/HoldingDocument'
import { OwnFrontDocument } from './containers/OwnFrontDocument'
import { OwnBackDocument } from './containers/OwnBackDocument'
import { ProofOfAddress } from './containers/ProofOfAddress'
import { ProofOfIncome } from './containers/ProofOfIncome'
import { IncludeDependent } from './messages/IncludeDependent'

import { Container } from './styles'

import { usePhysicalPersonRegister } from '../../../shared/hooks'
import { useModal } from '@/hooks/useModal'

interface DocumentFilesProps {
  saveDocuments: number
}

interface ErrorsState {
  holdingDocument?: string
  ownFrontDocument?: string
  ownBackDocument?: string
  selectIncome?: string
}

export const DocumentFiles: React.FC<DocumentFilesProps> = ({
  saveDocuments,
}) => {
  const { showMessage } = useModal()

  const { documents } = usePhysicalPersonRegister()

  const [holdingDocument, setHoldingDocument] = useState<File | string>('')
  const [ownFrontDocument, setOwnFrontDocument] = useState<File | string>('')
  const [ownBackDocument, setOwnBackDocument] = useState<File | string>('')
  const [proofOfAddress, setProofOfAddress] = useState<File | string>('')
  const [proofOfIncome, setProofOfIncome] = useState<File | string>('')
  const [selectIncome, setSelectIncome] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  useEffect(() => {
    setHoldingDocument(documents.get.holdingDocument)
    setOwnFrontDocument(documents.get.ownFrontDocument)
    setOwnBackDocument(documents.get.ownBackDocument)
    setProofOfAddress(documents.get.proofOfAddress)
    setProofOfIncome(documents.get.proofOfIncome)
    setSelectIncome(documents.get.selectIncome || '')
  }, [])

  useEffect(() => {
    if (saveDocuments) {
      if (holdingDocument === '') {
        setErrors({
          holdingDocument:
            'O envio da sua foto segurando o documento é obrigatório.',
        })

        scrollTo(0, 250)
        return
      }

      if (ownFrontDocument === '') {
        setErrors({
          ownFrontDocument:
            'O envio da foto do documento de identificação é obrigatório.',
        })

        scrollTo(0, 400)
        return
      }

      if (ownBackDocument === '') {
        setErrors({
          ownBackDocument:
            'O envio da foto do documento de identificação é obrigatório.',
        })

        scrollTo(0, 550)
        return
      }

      if (selectIncome === '') {
        setErrors({
          selectIncome: 'A escolha da sua faixa de renda é obrigatório.',
        })

        return
      }

      documents.set({
        holdingDocument,
        ownFrontDocument,
        ownBackDocument,
        proofOfIncome,
        selectIncome,
      })

      showMessage(IncludeDependent)
    }
  }, [saveDocuments])

  return (
    <Container>
      <h1>Documentos</h1>
      <HoldingDocument
        onGetFile={setHoldingDocument}
        holdingDocumentFile={holdingDocument}
        error={errors?.holdingDocument}
      />

      <OwnFrontDocument
        hasPreviousDocument={!!holdingDocument}
        onGetFile={setOwnFrontDocument}
        ownFrontDocumentFile={ownFrontDocument}
        error={errors?.ownFrontDocument}
      />

      <OwnBackDocument
        hasPreviousDocument={!!holdingDocument && !!ownFrontDocument}
        onGetFile={setOwnBackDocument}
        ownBackDocumentFile={ownBackDocument}
        error={errors?.ownBackDocument}
      />

      <ProofOfAddress
        hasPreviousDocument={
          !!holdingDocument && !!ownFrontDocument && !!ownBackDocument
        }
        onGetFile={setProofOfAddress}
        proofOfAddressFile={proofOfAddress}
      />

      <ProofOfIncome
        hasPreviousDocument={
          !!holdingDocument && !!ownFrontDocument && !!ownBackDocument
        }
        onGetFile={setProofOfIncome}
        proofOfIncomeFile={proofOfIncome}
        onSelectIncome={setSelectIncome}
        selectIncome={selectIncome}
        error={errors?.selectIncome}
      />
      {console.log(selectIncome)}
    </Container>
  )
}
