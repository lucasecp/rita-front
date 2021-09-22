import React, { useState } from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import SelectComponent from '@/components/Form/Select'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'

import { AccordionContainer } from '../style'
import InstructionsIncome from './Instructions'
import SendedFile from '../../components/SendedFile'

const ProofOfIncome = () => {
  const [proofOfIncomeFile, setProofOfIncomeFile] = useState('')
  const [selectIncome, setSelectIncome] = useState('')

  console.log(proofOfIncomeFile, selectIncome)

  return (
    <>
      <AccordionContainer>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          expandIcon={!proofOfIncomeFile && <ArrowDownIcon />}
        >
          <h2>Comprovante de Renda</h2>
        </AccordionSummary>
        <AccordionDetails>
          {proofOfIncomeFile && (
            <SendedFile
              file={proofOfIncomeFile}
              onGetFile={setProofOfIncomeFile}
            />
          )}
          {!proofOfIncomeFile && (
            <InstructionsIncome
              selectIncome={selectIncome}
              onGetSelectIncome={setSelectIncome}
              onGetFile={setProofOfIncomeFile}
            />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default ProofOfIncome
