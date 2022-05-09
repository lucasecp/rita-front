import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const { showMessage } = useModal()

  const { setDocumentsFile } = usePhysicalPersonRegister()

  const [holdingDocumentFile, setHoldingDocumentFile] = useState<File | string>(
    '',
  )

  const [ownFrontDocumentFile, setOwnFrontDocumentFile] = useState<
    File | string
  >('')
  const [ownBackDocumentFile, setOwnBackDocumentFile] = useState<File | string>(
    '',
  )
  const [proofOfAddressFile, setProofOfAddressFile] = useState<File | string>(
    '',
  )
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState<File | string>('')
  const [selectIncome, setSelectIncome] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  useEffect(() => {
    if (saveDocuments) {
      if (holdingDocumentFile === '') {
        setErrors({
          holdingDocument:
            'O envio da sua foto segurando o documento é obrigatório.',
        })

        scrollTo(0, 250)
        return
      }

      if (ownFrontDocumentFile === '') {
        setErrors({
          ownFrontDocument:
            'O envio da foto do documento de identificação é obrigatório.',
        })

        scrollTo(0, 400)
        return
      }

      if (ownBackDocumentFile === '') {
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

      setDocumentsFile({
        holdingDocumentFile,
        ownFrontDocumentFile,
        ownBackDocumentFile,
        proofOfIncomeFile,
        selectIncome,
      })

      showMessage(IncludeDependent)
    }
  }, [saveDocuments])

  return (
    <Container>
      <h1>Documentos</h1>
      <HoldingDocument
        onGetFile={setHoldingDocumentFile}
        holdingDocumentFile={holdingDocumentFile}
        error={errors?.holdingDocument}
      />

      <OwnFrontDocument
        hasPreviousDocument={!!holdingDocumentFile}
        onGetFile={setOwnFrontDocumentFile}
        ownFrontDocumentFile={ownFrontDocumentFile}
        error={errors?.ownFrontDocument}
      />

      <OwnBackDocument
        hasPreviousDocument={!!holdingDocumentFile && !!ownFrontDocumentFile}
        onGetFile={setOwnBackDocumentFile}
        ownBackDocumentFile={ownBackDocumentFile}
        error={errors?.ownBackDocument}
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
        error={errors?.selectIncome}
      />
    </Container>
  )
}
