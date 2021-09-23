import React, { useEffect, useState } from 'react'

import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'

import { Container } from './styles'

import BigSize from '../../messages/BigSize'
import InvalidFormat from '../../messages/InvalidFormat'

import OutlineButton from '@/components/Button/Outline'
import InputFile from '@/components/Form/InputFile/InputFile'


import { useModal } from '@/context/useModal'

import isValidSizeFile from '@/helpers/file/validateSizeFile'
import isValidTypeFile from '@/helpers/file/validateTypeFile'
import ImagePreview from '../../messages/ImagePreview'

function SendedFile({ file, onGetFile }) {
  // const { modalVisible, message, closeable, showMessage, closeModal } = useModal()
  const { showMessage } = useModal()

  useEffect(() => {
    if (!isValidTypeFile(file)) {
      showMessage(InvalidFormat)
      return removeFile()
    }

    if (!isValidSizeFile(file)) {
      showMessage(BigSize)
      return removeFile()
    }
  }, [file])

  const removeFile = () => {
    onGetFile(null)
  }

  const showPreview = () => {
    showMessage(ImagePreview, { file }, true)
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
      </Container>
    </>
  )
}

export default SendedFile
