import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'


export const DocumentsNotSent: React.FC = () => {

  const onTryAgain = () => {
    
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
