import React, { useEffect } from 'react'

import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'

import { Container } from './styles'

import { BigSize } from './messages/BigSize'
import { InvalidFormat } from './messages/InvalidFormat'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile'

import { useModal } from '@/hooks/useModal'

import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { ImagePreview } from './messages/ImagePreview'
import downloadFile from '@/helpers/downloadFile'
import { useMediaPredicate } from 'react-media-hook'
import previewFileInNewBlank from '@/helpers/previewFileInNewBlank'

interface SendedFileProps {
  file: File | string
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
}

export const SendedFile: React.FC<SendedFileProps> = ({ file, onGetFile }) => {
  const { showMessage } = useModal()

  const isMobile = useMediaPredicate('(max-width: 800px)')

  const removeFile = () => {
    onGetFile('')
  }

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

  const previewForPdf = () => {
    if (isMobile) {
      return downloadFile(file, '', 'pdf')
    }

    return previewFileInNewBlank(file)
  }

  const showPreview = () => {
    if (typeof file === 'object' && file.type === 'application/pdf') {
      return previewForPdf()
    }

    showMessage(ImagePreview, { file }, true)
  }

  return (
    <Container>
      <section>
        <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
          <OutlineButton small variation="blue">
            Selecionar Arquivo
          </OutlineButton>
        </InputFile>
        <h6>{typeof file === 'object' && file.name}</h6>
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
  )
}
