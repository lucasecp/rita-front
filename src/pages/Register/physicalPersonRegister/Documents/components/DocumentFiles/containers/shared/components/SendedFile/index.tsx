import React, { useEffect } from 'react'

import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'

import { Container } from './styles'

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
  name: string
}

export const SendedFile: React.FC<SendedFileProps> = ({
  file,
  onGetFile,
  name,
}) => {
  const { showMessage, showSimple } = useModal()

  const isMobile = useMediaPredicate('(max-width: 800px)')

  const removeFile = () => {
    onGetFile('')
  }

  useEffect(() => {
    if (!isValidTypeFile(file)) {
      showSimple.warning(
        'Formato do Arquivo inválido. Por favor, selecione outro arquivo.',
        { width: 350 },
      )

      return removeFile()
    }

    if (!isValidSizeFile(file)) {
      showSimple.warning(
        'O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro arquivo.',
        { width: 350 },
      )

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
        <InputFile
          accept=".png, .jpg, .jpeg, .pdf"
          setValue={onGetFile}
          data-test={`${name}-selectFile`}
        >
          <OutlineButton small variation="blue">
            Selecionar Arquivo
          </OutlineButton>
        </InputFile>
        <h6>{typeof file === 'object' && file.name}</h6>
      </section>
      <aside>
        <button onClick={showPreview} data-test={`${name}-see`}>
          <img src={zoomIcon} />
          Ver
        </button>
        <button onClick={removeFile} data-test={`${name}-remove`}>
          <img src={trashIcon} />
          Remover
        </button>
      </aside>
    </Container>
  )
}
