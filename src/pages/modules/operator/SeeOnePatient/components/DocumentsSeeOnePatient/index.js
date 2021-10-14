import isObjectEmpty from '@/helpers/isEmpty'
import React, { useEffect } from 'react'
import SeeDocumentFile from './SeeDocumentFile'

import { Container } from './styles'

function DocumentsSeeOnePatient({ documents }) {
  return (
    <Container>
      <h2>Documentos</h2>
      <SeeDocumentFile
        title="Foto segurando o documento de identificação"
        document={documents.holdingDocument}
        disabled={!documents.holdingDocument}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação"
        document={documents.identifyDocument}
        disabled={!documents.identifyDocument}
      />
      <SeeDocumentFile
        title="Comprovante de renda"
        document={documents.incomeDocument}
        disabled={!documents.incomeDocument}
      />
    </Container>
  )
}

export default DocumentsSeeOnePatient
