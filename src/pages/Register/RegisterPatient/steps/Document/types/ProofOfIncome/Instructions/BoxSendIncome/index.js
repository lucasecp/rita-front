import React from 'react'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile'

import { Container } from './styles'

function BoxSendIncome({ onGetFile }) {
  return (
    <Container>
      <h6>Para obter melhores descontos no laboratório Sabin, você precisa:</h6>
      <ul>
        <li>
          <h5>Enviar comprovação de renda</h5>
          <span>Comprovante de renda deve ter menos de 90 dias </span>
        </li>

        <div>OU</div>

        <li>
          <h5>Enviar comprovação que não tem renda</h5>
          <span>
            <a
              href="https://meucadunico.cidadania.gov.br/meu_cadunico/"
              target="_blank"
              rel="noreferrer"
            >
              clique aqui
            </a>
            &nbsp; para ter acesso ao CADÚNICO. Lá no site do governo você
            consegue gerar o seu comprovante para incluir aqui no seu cadastro.
          </span>
        </li>
      </ul>

      <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
        <OutlineButton small variation="blue">
          Selecionar Arquivo
        </OutlineButton>
      </InputFile>
      <p>Este campo não é obrigatório</p>
      <section>
        <span>Permitido apenas o envio de 1 arquivo</span>
        <span>Tamanho máximo do arquivo: 10MB</span>
        <span>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
      </section>
    </Container>
  )
}

export default BoxSendIncome
