import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { AccordionContainer } from '../styles'
import InstructionsIncome from './Instructions'
import SendedFile from '../../components/SendedFile'

const ProofOfIncome = ({
  proofOfIncomeFile,
  onGetFile,
  selectIncome,
  onSelectIncome,
  hasPreviousDocument,
  error,
}) => {
  return (
    <>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={hasPreviousDocument || !!proofOfIncomeFile}
      >
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          expandIcon={!proofOfIncomeFile && <ArrowDownIcon />}
          disabled={!!proofOfIncomeFile}
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
