import React from 'react'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile'

import { Container } from './styles'

interface BoxSendIncomeProps {
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
}

export const BoxSendIncome: React.FC<BoxSendIncomeProps> = ({ onGetFile }) => {
  return (
    <Container>
      <div id="box-information">
        <h6>
          Para obter melhores descontos no laboratório Sabin, você precisa:
        </h6>
        <ul>
          <li>
            <h5>Enviar comprovação de renda</h5>
            <p>Comprovante de renda deve ter menos de 90 dias </p>
          </li>

          <div>OU</div>

          <li>
            <h5>Enviar comprovação que não tem renda</h5>
            <p>
              <a
                href="https://cadunico.dataprev.gov.br/#/consultaSimples"
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui
              </a>
              &nbsp; para ter acesso ao CADÚNICO. Lá no site do governo você
              consegue gerar o seu comprovante para incluir aqui no seu
              cadastro.
            </p>
          </li>
        </ul>
      </div>

      <InputFile
        data-test="IncomeSelectFile"
        accept=".png, .jpg, .jpeg, .pdf"
        setValue={onGetFile}
      >
        <OutlineButton small variation="blue">
          Selecionar Arquivo
        </OutlineButton>
      </InputFile>

      <section>
        <span>Permitido apenas o envio de 1 arquivo</span>
        <span>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
        <span>Tamanho máximo do arquivo: 10MB</span>
      </section>
    </Container>
  )
}
