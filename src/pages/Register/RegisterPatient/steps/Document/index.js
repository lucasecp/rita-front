import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import HoldingDocument from './type/HoldingDocument'
import OwnDocument from './type/OwnDocument'
import ProofOfIncome from './type/ProofOfIncome'

const Document = ({ setButtonPass }) => {
  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

  useEffect(() => {
    if (holdingDocumentFile !== '' && ownDocumentFile !== '') {
      return setButtonPass(true)
      // terminar lógica
    }

    setButtonPass(false)
  }, [holdingDocumentFile, ownDocumentFile])

  console.log(
    holdingDocumentFile,
    ownDocumentFile,
    proofOfIncomeFile,
    selectIncome
  )

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
