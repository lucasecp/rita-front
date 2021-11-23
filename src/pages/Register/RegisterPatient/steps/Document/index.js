import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import HoldingDocument from './types/HoldingDocument'
import OwnDocument from './types/OwnDocument'
import ProofOfIncome from './types/ProofOfIncome'

import { incomeType } from './constants/income'

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

    if (
      holdingDocumentFile !== '' &&
      ownDocumentFile !== '' &&
      (selectIncome === incomeType.MORE_ONE_HALF ||
        ((selectIncome === incomeType.NO_INCOME ||
          selectIncome === incomeType.ONE_HALF) &&
          proofOfIncomeFile !== ''))
    ) {
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
        onGetFile={setOwnDocumentFile}
        ownDocumentFile={ownDocumentFile}
      />

      <ProofOfIncome
        onGetFile={setProofOfIncomeFile}
        proofOfIncomeFile={proofOfIncomeFile}
        onSelectIncome={setSelectIncome}
        selectIncome={selectIncome}
      />
    </Container>
  )
}

export default Document
