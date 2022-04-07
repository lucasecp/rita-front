import React from 'react'

import { Container } from './styles'
import { SendedFile } from './SendedFile'

export const Documents = ({
  incomeValue,
  documentToSave,
  setDocumentToSave,
}) => {
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <section>
        <h5>Renda:</h5>
        <div>
          <div>
            <div>
              <h4>{incomeValue} </h4>
            </div>
          </div>
          <SendedFile file={documentToSave} onGetFile={setDocumentToSave} />
        </div>
      </section>
    </Container>
  )
}
