import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import HoldingDocument from './types/HoldingDocument'
import OwnDocument from './types/OwnDocument'
import ProofOfIncome from './types/ProofOfIncome'


const Document = ({ setButtonPass, onGetDocumentFiles, savedFiles }) => {
  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

  useEffect(() => {
    verifySavedFiles()
  }, [])

  useEffect(() => {
    onGetDocumentFiles({
      holdingDocumentFile,
      ownDocumentFile,
      proofOfIncomeFile,
      selectIncome,
    })

    if (holdingDocumentFile !== '' && ownDocumentFile !== '' && selectIncome) {
      return setButtonPass(true)
    }

    setButtonPass(false)
  }, [holdingDocumentFile, ownDocumentFile, proofOfIncomeFile, selectIncome])

  const verifySavedFiles = () => {
    if (!Object.keys(savedFiles).length) return
    setHoldingDocumentFile(savedFiles.holdingDocumentFile || '')
    setOwnDocumentFile(savedFiles.ownDocumentFile || '')
    setProofOfIncomeFile(savedFiles.proofOfIncomeFile || '')
    setSelectIncome(savedFiles.selectIncome || '')
  }
  return (
    <Container>
      <h1>Documentos</h1>
      <HoldingDocument
        onGetFile={setHoldingDocumentFile}
        holdingDocumentFile={holdingDocumentFile}
      />

      <OwnDocument
        hasPreviousDocument={!!holdingDocumentFile}
        onGetFile={setOwnDocumentFile}
        ownDocumentFile={ownDocumentFile}
      />

      <ProofOfIncome
        hasPreviousDocument={!!ownDocumentFile}
        onGetFile={setProofOfIncomeFile}
        proofOfIncomeFile={proofOfIncomeFile}
        onSelectIncome={setSelectIncome}
        selectIncome={selectIncome}
      />
    </Container>
  )
}

export default Document
