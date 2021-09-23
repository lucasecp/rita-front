import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import HoldingDocument from './type/HoldingDocument'
import OwnDocument from './type/OwnDocument'
import ProofOfIncome from './type/ProofOfIncome'

const Document = ({ setButtonPass, onGetDocumentFiles }) => {
  const [holdingDocumentFile, setHoldingDocumentFile] = useState('')
  const [ownDocumentFile, setOwnDocumentFile] = useState('')
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

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
      (selectIncome === 'more_one_half' ||
        ((selectIncome === 'not_income' || selectIncome === 'one_half') &&
          proofOfIncomeFile !== ''))
    ) {
      return setButtonPass(true)
    }

    setButtonPass(false)
  }, [holdingDocumentFile, ownDocumentFile, proofOfIncomeFile, selectIncome])

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
