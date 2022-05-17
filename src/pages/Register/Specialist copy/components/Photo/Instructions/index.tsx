import React from 'react'

import { Container } from './styles'

const Instructios: React.FC = () => {
  return (
    <Container>
      <h3>Adicionar Foto</h3>
      <div>
        <h6>Permitido apenas o envio de 1 arquivo </h6>
        <span> Tipos de arquivos aceitos: jpg, jpeg, png.</span>
        <span>Tamanho máximo do arquivo: 10MB</span>
      </div>
    </Container>
  )
}

export default Instructios
