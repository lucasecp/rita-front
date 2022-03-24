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
  file: File | string
  onGetFile: React.Dispatch<React.SetStateAction<File | string>>
  dependentDocumentName?: string
}

export const SendedFile: React.FC<SendedFileProps> = ({
  file,
  onGetFile,
  dependentDocumentName,
}) => {
  const { showMessage } = useModal()

  const isMobile = useMediaPredicate('(max-width: 800px)')

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
        <h6>
          {typeof file !== 'string'
            ? file.name
            : dependentDocumentName || 'Não possui arquivo'}
        </h6>
        <aside>
          <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
            <button>Alterar</button>
          </InputFile>
        </aside>
      </section>
    </Container>
  )
}
