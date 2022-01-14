import React from 'react'

import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'

export const Documents = ({ data }) => {
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      {data?.documents?.Cpf && (
        <div>
          <h4>Foto do documento de identificação </h4>
          {data?.documents?.Cpf && <VerifiedIcon />}
        </div>
      )}
      {data?.documents?.FotoSegurandoDoc && (
        <div>
          <h4>Foto segurando documento de identificação </h4>{' '}
          {data?.documents?.FotoSegurandoDoc && <VerifiedIcon />}
        </div>
      )}
      <section>
        <h5>Renda:</h5>
        <div>
          <div>
            <h4>{data?.income} </h4>
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
