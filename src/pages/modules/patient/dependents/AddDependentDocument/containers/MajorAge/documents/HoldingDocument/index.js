import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import InstructionsHoldingDocuments from './Instructions'
import { SendedFile } from '../components/SendedFile'

const HoldingDocument = ({ holdingDocumentFile, onGetFile, error }) => {
  return (
    <>
      <AccordionContainer square={true} defaultExpanded={true}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={!holdingDocumentFile && <ArrowDownIcon />}
          disabled={!!holdingDocumentFile}
        >
          <h2>
            Foto segurando o documento de identificação <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {holdingDocumentFile && (
            <SendedFile file={holdingDocumentFile} onGetFile={onGetFile} />
          )}
          {!holdingDocumentFile && (
            <InstructionsHoldingDocuments onGetFile={onGetFile} error={error} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default HoldingDocument
