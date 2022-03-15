import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { Container, AccordionContainer } from '../styles'
// import InstructionsIncome from './Instructions'
import { SendedFile } from '../../SendedFile'

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
      {/* <AccordionDetails> */}
      {proofOfIncomeFile && (
        <SendedFile file={proofOfIncomeFile} onGetFile={onGetFile} />
      )}
      {/* {!proofOfIncomeFile && (
            <InstructionsIncome
              selectIncome={selectIncome}
              onGetSelectIncome={onSelectIncome}
              onGetFile={onGetFile}
              error={error}
            />
          )} */}
      {/* </AccordionDetails> */}
    </Container>
  )
}

export default ProofOfIncome
