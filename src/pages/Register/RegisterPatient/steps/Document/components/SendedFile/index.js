import React, { useState } from 'react'

import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'

import OutlineButton from '@/components/Button/Outline'
import InputFile from '@/components/Form/InputFile/InputFile'

import { Container } from './styles'
import Modal from '@/components/Modal'

function SendedFile({ file, onGetFile }) {
  const sourceFile = URL.createObjectURL(file)

  const [showModal, setShowModal] = useState(false)

  const removeFile = () => {
    onGetFile('')
  }

  const showPreview = () => {
    setShowModal(true)
  }

  return (
    <>
      <Container>
        <section>
          <InputFile setValue={onGetFile}>
            <OutlineButton small variation="blue">
              Selecionar Arquivo
            </OutlineButton>
          </InputFile>
          <h6>{file.name}</h6>
        </section>
        <aside>
          <button onClick={showPreview}>
            <img src={zoomIcon} />
            Ver
          </button>
          <button onClick={removeFile}>
            <img src={trashIcon} />
            Remover
          </button>
        </aside>
        <Modal show={showModal} onCloseModal={setShowModal}>
          <img src={sourceFile} />
        </Modal>
      </Container>
    </>
  )
}

export default SendedFile
