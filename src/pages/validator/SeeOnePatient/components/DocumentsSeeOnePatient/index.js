import React from 'react'
import SeeDocumentFile from './SeeDocumentFile'

import { Container } from './styles'

function DocumentsSeeOnePatient() {
  const file = { name: 'Nome_do_arquivo_da_foto.jpg' }

  return (
    <Container>
      <h2>Documentos</h2>
      <SeeDocumentFile
        title="Foto segurando o documento de identificação"
        file={file}
      />
      <SeeDocumentFile title="Foto do documento de identificação" file={file} />
      <SeeDocumentFile title="Comprovante de renda" disabled file={file} />
    </Container>
  )
}

export default DocumentsSeeOnePatient
