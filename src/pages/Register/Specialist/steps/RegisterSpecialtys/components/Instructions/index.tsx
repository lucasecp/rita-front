import React from 'react'

import { Container } from './styles'

const Instructios: React.FC = () => {
  return (
    <Container>
      <h4>Documento de Comprovação:</h4>
      <h5>Permitido apenas o envio de 1 arquivo</h5>
      <h6>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf </h6>
      <h6>Tamanho máximo do arquivo: 10MB</h6>
    </Container>
  )
}

export default Instructios
