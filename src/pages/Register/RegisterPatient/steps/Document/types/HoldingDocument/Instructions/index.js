import React from 'react'

import selfieImage from '@/assets/img/selfie.png'

import { Container } from './styles'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile'

function InstructionsHoldingDocuments({ onGetFile }) {
  return (
    <Container>
      <h3>
        Faça aqui o upload da sua foto segurando o documento de identificação
        que contenha o seu CPF:
      </h3>
      <div>
        <section>
          <img src={selfieImage} />
        </section>
        <aside>
          <h4>Como tirar a foto:</h4>
          <ul>
            <li>Vá a um local seguro e iluminado;</li>
            <li>Deixe o documento próximo ao rosto, conforme imagem;</li>
            <li>Seu rosto deve aparecer por inteiro;</li>
            <li>O documento deve aparecer por inteiro;</li>
            <li>Verifique se a imagem ficou nítida;</li>
          </ul>
          <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
            <OutlineButton small variation="blue">
              Selecionar Arquivo
            </OutlineButton>
          </InputFile>
          <p>
            O envio da sua foto segurando o documento de identificação é
            obrigatório.
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

export default InstructionsHoldingDocuments
