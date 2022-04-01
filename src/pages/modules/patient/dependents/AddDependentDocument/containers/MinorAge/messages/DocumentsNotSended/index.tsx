import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

interface DocumentsNotSendedProps {
  onSaveDocumentDependent: () => Promise<void>
}

export const DocumentsNotSended: React.FC<DocumentsNotSendedProps> = ({
  onSaveDocumentDependent,
}) => {
  const onTryAgain = async () => {
    await onSaveDocumentDependent()
  }

  return (
    <Container>
      <p>
        Opa! <br />
        Houve um problema no envio dos documentos!
      </p>
      <footer>
        <ButtonPrimary onClick={onTryAgain}>
          Clique aqui para tentar novamente
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
