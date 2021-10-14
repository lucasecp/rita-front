import React from 'react'

import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'

import { Container } from './styles'
import PreviewImage from '../../../messages/PreviewImage'
import { useModal } from '@/context/useModal'
import convertImageFromApiToBase64 from '@/helpers/convertImageFromApiToBase64'

function SeeDocumentFile({ title, document, disabled }) {
  const { showMessage } = useModal()

  const onZoomDocument = () => {
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

export default SeeDocumentFile
