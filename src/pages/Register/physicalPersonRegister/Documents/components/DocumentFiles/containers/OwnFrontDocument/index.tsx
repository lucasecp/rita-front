import React from 'react'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { AccordionContainer } from './styles'

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down2.svg'

import { InstructionsOwnFrontDocument } from './components/Instructions'
import { SendedFile } from '../shared/components/SendedFile'

interface OwnFrontDocumentProps {
  ownFrontDocumentFile: File | string
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
  hasPreviousDocument: boolean
  error: string
}

export const OwnFrontDocument: React.FC<OwnFrontDocumentProps> = ({
  ownFrontDocumentFile,
  onGetFile,
  hasPreviousDocument,
  error,
}) => {
  return (
    <>
      <AccordionContainer
        square={true}
        defaultExpanded={false}
        expanded={hasPreviousDocument || !!ownFrontDocumentFile}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={!ownFrontDocumentFile && <ArrowDownIcon />}
          disabled={!!ownFrontDocumentFile}
        >
          <h2>
            Foto do documento de identificação - Frente <span>*</span>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {ownFrontDocumentFile && (
            <SendedFile
              file={ownFrontDocumentFile}
              onGetFile={onGetFile}
              name="OwnFrontDocument"
            />
          )}
          {!ownFrontDocumentFile && (
            <InstructionsOwnFrontDocument onGetFile={onGetFile} error={error} />
          )}
        </AccordionDetails>
      </AccordionContainer>
    </>
  )
}
