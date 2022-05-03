import { useEffect, useState } from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'

import InstructionsIncome from './Instructions'
import SendedFile from '../../components/SendedFile'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { Container, AccordionContainer } from '../styles'

const ProofOfAddress = ({
  proofOfAddressFile,
  onGetFile,
  hasPreviousDocument,
}) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (hasPreviousDocument && proofOfAddressFile) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [hasPreviousDocument, proofOfAddressFile])

  const toggleAccordion = () => {
    if (hasPreviousDocument || !!proofOfAddressFile) {
      setToggle(!toggle)
    }
  }

  return (
    <Container>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={toggle}
        onChange={toggleAccordion}
        // expanded={hasPreviousDocument || !!proofOfAddressFile}
        style={{ display: 'none' }}
      >
        <AccordionSummary
          aria-controls="panel4a-content"
          id="panel4a-header"
          expandIcon={!proofOfAddressFile && <ArrowDownIcon />}
          disabled={!!proofOfAddressFile}
        >
          <h2>Comprovante de Residência</h2>
        </AccordionSummary>
        <AccordionDetails>
          {proofOfAddressFile ? (
            <SendedFile file={proofOfAddressFile} onGetFile={onGetFile} />
          ) : (
            <InstructionsIncome onGetFile={onGetFile} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </Container>
  )
}

export default ProofOfAddress
