import React, { useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

import { Container } from './styles'

import HoldingDocument from './type/HoldingDocument'
import OwnDocument from './type/OwnDocument'
import ProofOfIncome from './type/ProofOfIncome'

const Document = () => {
  const [holdingDocument, setHoldingDocument] = useState('')
  const [ownDocument, setOwnDocument] = useState('')
  const [proofOfIncome, setProofOfIncome] = useState('')

  return (
    <Container>
      <h1>Documentos</h1>
      <HoldingDocument setValue={setHoldingDocument} value={holdingDocument} />

      <OwnDocument setValue={setOwnDocument} value={ownDocument} />

      <ProofOfIncome setValue={setProofOfIncome} value={proofOfIncome} />
    </Container>
  )
}

export default Document
