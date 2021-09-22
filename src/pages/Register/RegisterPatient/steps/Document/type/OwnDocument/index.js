import React, { useState } from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from '../style'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down.svg'

import InstructionsOwnDocuments from './Instructions'
import SendedFile from '../../components/SendedFile'

const OwnDocument = () => {
  const [ownDocumentFile, setOwnDocumentFile] = useState('')

  return (
    <>
      <AccordionContainer square={true}>
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
            <SendedFile file={ownDocumentFile} onGetFile={setOwnDocumentFile} />
          )}
          {!ownDocumentFile && (
            <InstructionsOwnDocuments onGetFile={setOwnDocumentFile} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}

export default OwnDocument
