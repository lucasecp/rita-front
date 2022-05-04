import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { AccordionContainer } from './styles'
import { InstructionsProofOfIncome } from './Instructions'
import { SendedFile } from '../components/SendedFile'

import { incomeType } from './constants/income'

interface ProofOfIncomeProps {
  proofOfIncomeFile: File | string
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
  selectIncome: string
  onSelectIncome: React.Dispatch<React.SetStateAction<string>>
  hasPreviousDocument: boolean
  error: string
}

export const ProofOfIncome: React.FC<ProofOfIncomeProps> = ({
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
          expandIcon={
            !proofOfIncomeFile &&
            selectIncome !== incomeType.MORE_ONE_HALF && <ArrowDownIcon />
          }
          disabled={
            !!proofOfIncomeFile || selectIncome === incomeType.MORE_ONE_HALF
          }
        >
          <h2>
            Comprovante de renda <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {proofOfIncomeFile && (
            <SendedFile file={proofOfIncomeFile} onGetFile={onGetFile} />
          )}
          {!proofOfIncomeFile && (
            <InstructionsProofOfIncome
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
