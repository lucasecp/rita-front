import React, { useEffect, useState } from 'react'

import { Container, BtnGroup, BtnPrev, CustomBtn } from './styles'

import HoldingDocument from './types/HoldingDocument'
import OwnDocument from './types/OwnDocument'
import OwnBackDocument from './types/OwnBackDocument'
import ProofOfIncome from './types/ProofOfIncome'
import ProofOfAddress from './types/ProofOfAddress'

const Document = ({ onGetDocumentFiles, savedFiles, setStep }) => {
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

  useEffect(() => {
    verifySavedFiles()
  }, [])

  useEffect(() => {
    onGetDocumentFiles({
      holdingDocumentFile,
      ownDocumentFile,
      ownBackDocumentFile,
      proofOfIncomeFile,
      proofOfAddressFile,
      selectIncome,
    })
  }, [
    holdingDocumentFile,
    ownDocumentFile,
    ownBackDocumentFile,
    proofOfIncomeFile,
    proofOfAddressFile,
    selectIncome,
  ])

  const verifySavedFiles = () => {
    if (!Object.keys(savedFiles).length) return
    setHoldingDocumentFile(savedFiles.holdingDocumentFile || '')
    setOwnDocumentFile(savedFiles.ownDocumentFile || '')
    setOwnBackDocumentFile(savedFiles.ownBackDocumentFile || '')
    setProofOfIncomeFile(savedFiles.proofOfIncomeFile || '')
    setProofOfAddressFile(savedFiles.proofOfAddressFile || '')
    setSelectIncome(savedFiles.selectIncome || '')
  }

  const nextStep = () => {
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
      return
    }

    setErrors({})
    setStep(4)
  }

  return (
    <>
      <Container>
        <h1>Documentos</h1>
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
          hasPreviousDocument={!!holdingDocumentFile && !!ownDocumentFile}
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
      </Container>
      <BtnGroup>
        <BtnPrev onClick={() => setStep(2)}>Etapa Anterior</BtnPrev>
        <CustomBtn onClick={nextStep}>Próxima Etapa</CustomBtn>
      </BtnGroup>
    </>
  )
}

export default Document
