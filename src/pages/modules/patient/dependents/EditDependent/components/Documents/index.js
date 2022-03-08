import React, { useState } from 'react'

import { Container, AccordionContainer } from './styles'
import { AccordionDetails, AccordionSummary } from '@material-ui/core'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { SendedFile } from './SendedFile'

export const Documents = ({
  data,
  documentToSave,
  setDocumentToSave,
  setAnyFieldsHasChanged,
  dependentDocumentName,
  dependentDocument,
  // setDocumentError,
  showErrors,
}) => {
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <section>
        <h5>Renda:</h5>
        <div>
          <div>
            <div>
              <h4>{data?.income} </h4>
            </div>
          </div>
          <SendedFile
            file={documentToSave}
            onGetFile={setDocumentToSave}
            dependentDocumentName={dependentDocumentName}
          />
        </div>
      </section>
    </Container>
  )
}