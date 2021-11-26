import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'

import { AccordionContainer } from '../styles'
import InstructionsIncome from './Instructions'
import SendedFile from '../../components/SendedFile'

import { incomeType } from '../../constants/income'

const ProofOfIncome = ({
  proofOfIncomeFile,
  onGetFile,
  selectIncome,
  onSelectIncome,
  ownDocumentFile
}) => {
  return (
    <>
      <AccordionContainer square={true} defaultExpanded={false} expanded={ownDocumentFile}>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          expandIcon={
            !proofOfIncomeFile &&
            selectIncome !== incomeType.MORE_ONE_HALF && <ArrowDownIcon />
          }
          disabled={
            !!proofOfIncomeFile || selectIncome === incomeType.MORE_ONE_HALF
          }
        >
          <h2>Comprovante de Renda</h2>
        </AccordionSummary>
        <AccordionDetails>
          {proofOfIncomeFile && (
            <SendedFile file={proofOfIncomeFile} onGetFile={onGetFile} />
          )}
          {!proofOfIncomeFile && (
            <InstructionsIncome
              selectIncome={selectIncome}
              onGetSelectIncome={onSelectIncome}
              onGetFile={onGetFile}
            />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default ProofOfIncome
