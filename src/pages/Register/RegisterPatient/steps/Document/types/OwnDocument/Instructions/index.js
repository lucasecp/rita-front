import React from 'react'

import documentImage from '@/assets/img/document.png'

import { Container } from './styles'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile/'

function InstructionsOwnDocuments({ onGetFile }) {
  return (
    <Container>
      <h3>
      Faça o envio de uma foto do seu documento de identificação que contenha o seu CPF
      </h3>
      <div>
        <section>
          <img src={documentImage} />
        </section>
        <aside>
          <h4>Como tirar a foto:</h4>
          <ul>
            <li>Vá a um local seguro e iluminado;</li>
            <li>O documento deve aparecer por inteiro;</li>
            <li>Verifique se a imagem ficou nítida;</li>
          </ul>
          <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
            <OutlineButton small variation="blue">
              Selecionar Arquivo
            </OutlineButton>
          </InputFile>
          <p>
            O envio da foto do seu documento de identificação é obrigatório.
          </p>
          <span>
            Tamanho máximo do arquivo: 10MB
            <br />
            Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.
            <br />
            Permitido apenas o upload de 1 arquivo.
          </span>
        </aside>
      </div>
    </Container>
  )
}

export default InstructionsOwnDocuments
