// import { AccordionDetails } from '@material-ui/core'

// import InstructionsIncome from './Instructions'
import { SendedFile } from '@/pages/modules/patient/dependents/EditDependent/components/Documents/SendedFile'

import { Container } from '../styles'

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
