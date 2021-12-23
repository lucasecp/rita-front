import React from 'react'

import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

export const Documents = ({ address, setAddress, isEditing }) => {
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>

      <div>
        <h4>Foto do documento de identificação </h4> <VerifiedIcon />
      </div>
      <div>
        <h4>Foto segurando documento de identificação </h4> <VerifiedIcon />
      </div>
      <div>
        <h4>Comprovante de renda </h4> <VerifiedIcon />
      </div>

    </Container>
  )
}
