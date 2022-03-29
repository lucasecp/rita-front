import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { Container, AccordionContainer } from '../styles'
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
    <Container>
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
          {/* <SendedFile file={proofOfIncomeFile} onGetFile={onGetFile} /> */}
          <InstructionsIncome
            selectIncome={selectIncome}
            onGetSelectIncome={onSelectIncome}
            onGetFile={onGetFile}
            error={error}
            file={proofOfIncomeFile}
          />
        </AccordionDetails>
      </AccordionContainer>
    </Container>
  )
}

export default ProofOfIncome
