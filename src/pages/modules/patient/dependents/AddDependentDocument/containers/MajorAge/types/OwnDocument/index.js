import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import InstructionsOwnDocuments from './Instructions'
import SendedFile from '../../components/SendedFile'

const OwnDocument = ({
  ownDocumentFile,
  onGetFile,
  hasPreviousDocument,
  error,
}) => {
  return (
    <>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={hasPreviousDocument || !!ownDocumentFile}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={!ownDocumentFile && <ArrowDownIcon />}
          disabled={!!ownDocumentFile}
        >
          <h2>
            Foto do documento de identificação - Frente <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {ownDocumentFile && (
            <SendedFile file={ownDocumentFile} onGetFile={onGetFile} />
          )}
          {!ownDocumentFile && (
            <InstructionsOwnDocuments onGetFile={onGetFile} error={error} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default OwnDocument
