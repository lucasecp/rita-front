import React from 'react'

import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'

import OutlineButton from '@/components/Button/Outline'
import InputFile from '@/components/Form/InputFile/InputFile'

import { Container } from './styles'

function SendedFile({ file, onGetFile }) {
  console.log(file)

  return (
    <Container>
      <section>
        <InputFile setValue={onGetFile}>
          <OutlineButton variation="blue">Selecionar Arquivo</OutlineButton>
        </InputFile>
        <h6>NomeArquivo</h6>
      </section>
      <div>
        <button onClick={() => null}>
          <img src={zoomIcon} />
          Ver
        </button>
        <button onClick={() => null}>
          <img src={trashIcon} />
          Remover
        </button>
      </div>
    </Container>
  )
}

export default SendedFile
