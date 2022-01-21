import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import InstructionsOwnDocuments from './Instructions'
import SendedFile from '../components/SendedFile'

const OwnBackDocument = ({
  ownBackDocumentFile,
  onGetFile,
  hasPreviousDocument,
  errors,
}) => {
  return (
    <>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={hasPreviousDocument || !!ownBackDocumentFile}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={!ownBackDocumentFile && <ArrowDownIcon />}
          disabled={!!ownBackDocumentFile}
        >
          <h2>
            Foto do documento de identificação - Verso <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {ownBackDocumentFile && (
            <SendedFile file={ownBackDocumentFile} onGetFile={onGetFile} />
          )}
          {!ownBackDocumentFile && (
            <InstructionsOwnDocuments onGetFile={onGetFile} errors={errors} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default OwnBackDocument
