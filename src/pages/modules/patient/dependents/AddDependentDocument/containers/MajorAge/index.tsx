import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import HoldingDocument from './documents/HoldingDocument'
import OwnDocument from './documents/OwnDocument'
import OwnBackDocument from './documents/OwnBackDocument'
import ProofOfIncome from './documents/ProofOfIncome'
import ProofOfAddress from './documents/ProofOfAddress'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { ComeBack } from './messages/ComeBack'
import { useHistory } from 'react-router-dom'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

interface MajorAgeProps {
  dependent: {
    id: number
    cpf: string
  }
}

export const MajorAge: React.FC<MajorAgeProps> = ({ dependent }) => {
  const { showMessage } = useModal()
  const history = useHistory()

  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [ownBackDocumentFile, setOwnBackDocumentFile] = useState('')
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [proofOfAddressFile, setProofOfAddressFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

  const [errors, setErrors] = useState({
    holdingDocument: '',
    ownDocument: '',
    ownBackDocument: '',
    selectIncome: '',
  })

  // useEffect(() => {
  //   verifySavedFiles()
  // }, [])

  // useEffect(() => {
  //   onGetDocumentFiles({
  //     holdingDocumentFile,
  //     ownDocumentFile,
  //     ownBackDocumentFile,
  //     proofOfIncomeFile,
  //     proofOfAddressFile,
  //     selectIncome,
  //   })
  // }, [
  //   holdingDocumentFile,
  //   ownDocumentFile,
  //   ownBackDocumentFile,
  //   proofOfIncomeFile,
  //   proofOfAddressFile,
  //   selectIncome,
  // ])

  // const verifySavedFiles = () => {
  //   if (!Object.keys(savedFiles).length) return
  //   setHoldingDocumentFile(savedFiles.holdingDocumentFile || '')
  //   setOwnDocumentFile(savedFiles.ownDocumentFile || '')
  //   setOwnBackDocumentFile(savedFiles.ownBackDocumentFile || '')
  //   setProofOfIncomeFile(savedFiles.proofOfIncomeFile || '')
  //   setProofOfAddressFile(savedFiles.proofOfAddressFile || '')
  //   setSelectIncome(savedFiles.selectIncome || '')
  // }

  const onCancelAddDependentDocuments = () => {
    if (
      holdingDocumentFile ||
      ownDocumentFile ||
      ownBackDocumentFile ||
      proofOfIncomeFile ||
      proofOfAddressFile ||
      selectIncome
    ) {
      return showMessage(ComeBack)
    }

    history.push(PATIENT_DEPENDENTS)
  }

  const onSaveDocumentDependent = () => {
    if (holdingDocumentFile === '') {
      setErrors((prevState) => ({
        ...prevState,
        holdingDocument:
          'O envio da sua foto segurando o documento é obrigatório.',
      }))
      scrollTo(0, 0)
      return
    }

    if (ownDocumentFile === '') {
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

    // setErrors({})
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

        <OwnDocument
          hasPreviousDocument={!!holdingDocumentFile}
          onGetFile={setOwnDocumentFile}
          ownDocumentFile={ownDocumentFile}
          error={errors.ownDocument}
        />

        <OwnBackDocument
          hasPreviousDocument={!!ownDocumentFile}
          onGetFile={setOwnBackDocumentFile}
          ownBackDocumentFile={ownBackDocumentFile}
          error={errors.ownBackDocument}
        />

        <ProofOfAddress
          hasPreviousDocument={
            !!holdingDocumentFile && !!ownDocumentFile && !!ownBackDocumentFile
          }
          onGetFile={setProofOfAddressFile}
          proofOfAddressFile={proofOfAddressFile}
        />

        <ProofOfIncome
          hasPreviousDocument={
            !!holdingDocumentFile && !!ownDocumentFile && !!ownBackDocumentFile
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
