import OutlineButton from '@/components/Button/Outline'
import InputFile from '@/components/Form/InputFile/InputFile'
import React from 'react'

import { Container } from './styles'

function BoxSendIncome({ onGetFile }) {
  return (
    <Container>
      <h6>Faça agora o envio do seu comprovante de renda</h6>
      <InputFile setValue={onGetFile}>
        <OutlineButton small variation="blue">
          Selecionar Arquivo
        </OutlineButton>
      </InputFile>
      <h5>O envio do seu comprovante de renda é obrigatório.</h5>
      <section>
        <span>Tamanho máximo do arquivo: 10MB</span>
        <span>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
        <span>Permitido apenas o upload de 1 arquivo</span>
      </section>
    </Container>
  )
}

export default BoxSendIncome
