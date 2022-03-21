import React from 'react'
import zoomIcon from '@/assets/icons/zoom.svg'
import trashIcon from '@/assets/icons/trash.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import ImagePreview from '../../messages/ImagePreview'
import { useMediaPredicate } from 'react-media-hook'
import downloadFile from '@/helpers/downloadFile'
import previewFileInNewBlank from '@/helpers/previewFileInNewBlank'
import { SpecialtysAndDocsType } from '../../../../types/index'
import { useRegisterSpecialist } from '@/pages/Register/Specialist/hooks'

interface ActionsProps {
  file: any
  setPhoto: (x: string) => void
  removePhoto: () => void
}

const Actions: React.FC<ActionsProps> = ({ file, setPhoto, removePhoto }) => {
  const { showMessage } = useModal()
  const isMobile = useMediaPredicate('(max-width: 767px)')

  const previewForPdf = () => {
    if (isMobile) {
      return downloadFile(file, '', 'pdf')
    }

    return previewFileInNewBlank(file)
  }

  const showPreview = () => {
    if (file.type === 'application/pdf') {
      return previewForPdf()
    }

    showMessage(ImagePreview, { file }, true)
  }
  return (
    <Container>
      <h3>{file.name}</h3>
      <div>
        <button onClick={showPreview}>
          <img src={zoomIcon} />
          Ver
        </button>
        <button onClick={removePhoto}>
          <img src={trashIcon} />
          Remover
        </button>
      </div>
    </Container>
  )
}

export default Actions
