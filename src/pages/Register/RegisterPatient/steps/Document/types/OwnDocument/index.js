import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'

import InstructionsOwnDocuments from './Instructions'
import SendedFile from '../../components/SendedFile'

const OwnDocument = ({ ownDocumentFile, onGetFile,holdingDocumentFile }) => {
  console.log(holdingDocumentFile)
  return (
    <>
      <AccordionContainer square={true} defaultExpanded={false} expanded={holdingDocumentFile}>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={!ownDocumentFile && <ArrowDownIcon />}
          disabled={!!ownDocumentFile}
        >
          <h2>Foto do documento de identificação</h2>
        </AccordionSummary>
        <AccordionDetails>
          {ownDocumentFile && (
            <SendedFile file={ownDocumentFile} onGetFile={onGetFile} />
          )}
          {!ownDocumentFile && (
            <InstructionsOwnDocuments onGetFile={onGetFile} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default OwnDocument
