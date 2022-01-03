import React from 'react'

import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'

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
      <section>
        <h5>Renda:</h5>
        <div>
          <div>
            <h4>Até 1 salário mínimo e meio </h4>
          </div>
          <div>
            <h4>Comprovante de renda </h4>
            <span>
              <ZoomIcon /> Ver
            </span>
          </div>
        </div>
      </section>
    </Container>
  )
}
