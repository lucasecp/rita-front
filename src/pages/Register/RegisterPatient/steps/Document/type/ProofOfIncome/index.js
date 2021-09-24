import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'

import { AccordionContainer } from '../style'
import InstructionsIncome from './Instructions'
import SendedFile from '../../components/SendedFile'

const ProofOfIncome = ({
  proofOfIncomeFile,
  onGetFile,
  selectIncome,
  onSelectIncome,
}) => {
  return (
    <>
      <AccordionContainer square={true} defaultExpanded={true}>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          expandIcon={
            !proofOfIncomeFile &&
            selectIncome !== 'more_one_half' && <ArrowDownIcon />
          }
          disabled={!!proofOfIncomeFile || selectIncome === 'more_one_half'}
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
