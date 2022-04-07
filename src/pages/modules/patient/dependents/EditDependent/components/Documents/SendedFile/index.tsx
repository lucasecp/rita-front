import React, { useEffect } from 'react'

import { Container } from './styles'

import { BigSize } from './messages/BigSize'
import { InvalidFormat } from './messages/InvalidFormat'

import { InputFile } from '@/components/Form/InputFile'

import { useModal } from '@/hooks/useModal'

import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { ImagePreview } from './messages/ImagePreview'
import downloadFile from '@/helpers/downloadFile'
import { useMediaPredicate } from 'react-media-hook'
import previewFileInNewBlank from '@/helpers/previewFileInNewBlank'

interface SendedFileProps {
  file: File
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
}

export const SendedFile: React.FC<SendedFileProps> = ({ file, onGetFile }) => {
  const { showMessage } = useModal()

  const removeFile = () => {
    onGetFile('')
  }

  useEffect(() => {
    if (!file) {
      return
    }

    if (!isValidTypeFile(file)) {
      showMessage(InvalidFormat)
      return removeFile()
    }

    if (!isValidSizeFile(file)) {
      showMessage(BigSize)
      return removeFile()
    }
  }, [file])

  return (
    <Container>
      <h4>{file ? 'Comprovante de Renda' : 'Não possui arquivo'}</h4>
      <aside>
        <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
          <button>Alterar</button>
        </InputFile>
      </aside>
    </Container>
  )
}
