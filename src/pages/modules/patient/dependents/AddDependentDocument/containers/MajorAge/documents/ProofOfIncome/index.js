import { useState, useEffect } from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { AccordionContainer } from '../styles'
import InstructionsIncome from './Instructions'
import SendedFile from '../components/SendedFile'

import { incomeType } from '../../constants/income'

const ProofOfIncome = ({
  proofOfIncomeFile,
  onGetFile,
  selectIncome,
  onSelectIncome,
  hasPreviousDocument,
  error,
}) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (hasPreviousDocument && (selectIncome || proofOfIncomeFile)) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [hasPreviousDocument, proofOfIncomeFile, selectIncome])

  const toggleAccordion = () => {
    if (hasPreviousDocument || !!proofOfIncomeFile) {
      setToggle(!toggle)
    }
  }

  return (
    <>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={toggle}
        onChange={toggleAccordion}
        // expanded={hasPreviousDocument || !!proofOfIncomeFile}
      >
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
          <h2>
            Comprovante de Renda <span>*</span>
          </h2>
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
              error={error}
            />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default ProofOfIncome
