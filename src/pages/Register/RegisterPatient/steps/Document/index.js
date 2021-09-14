import React, { useState } from 'react'
import { Container } from '../style'
import HoldingDocument from './type/HoldingDocument'
import OwnDocument from './type/OwnDocument'
import ProofOfIncome from './type/ProofOfIncome'

const Document = () => {
  const [holdingDocument, setHoldingDocument] = useState('');
  const [ownDocument, setOwnDocument] = useState('');
  const [proofOfIncome, setProofOfIncome] = useState('');

  return (
    <Container>
      <h1>Documentos</h1>

        <HoldingDocument setValue={setHoldingDocument} value={holdingDocument} />

        <OwnDocument setValue={setOwnDocument} value={ownDocument}/>

        <ProofOfIncome setValue={setProofOfIncome} value={proofOfIncome}/>

    </Container>
  )
}

export default Document