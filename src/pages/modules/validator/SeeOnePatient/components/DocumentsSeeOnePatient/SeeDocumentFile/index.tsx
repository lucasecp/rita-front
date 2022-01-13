import React from 'react'

import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'

import { Container } from './styles'
import PreviewImage from '../../../messages/PreviewImage'
import { useModal } from '@/hooks/useModal'
import convertImageFromApiToBase64 from '@/helpers/convertImageFromApiToBase64'
import { AxiosResponse } from 'axios'

interface SeeDocumentFileProps {
  title: string
  document: AxiosResponse | undefined
  disabled: boolean
}

export const SeeDocumentFile: React.FC<SeeDocumentFileProps> = ({
  title,
  document,
  disabled,
}) => {
  const { showMessage } = useModal()

  const onZoomDocument = () => {
    if (!document) {
      return
    }

    const typeDocument = document.headers['content-type']

    if (typeDocument === 'application/pdf') {
      const blobDocument = new Blob([document.data], {
        type: 'application/pdf',
      })

      const urlDocument = URL.createObjectURL(blobDocument)

      return window.open(urlDocument)
    }

    const source = convertImageFromApiToBase64(document)

    return showMessage(PreviewImage, { source }, true)
  }

  return (
    <Container onClick={onZoomDocument} disabled={disabled}>
      <h4>{title}</h4>
      <button>
        <ZoomIcon />
        Ver
      </button>
    </Container>
  )
}
