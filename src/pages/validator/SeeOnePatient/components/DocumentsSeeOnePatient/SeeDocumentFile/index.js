import React from 'react'

import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'

import { Container } from './styles'

function SeeDocumentFile({ title, file, disabled }) {
  return (
    <Container disabled={disabled}>
      <h3>{title}</h3>
      <div>
        <h4>{file.name}</h4>
        <button disabled={disabled}>
          <ZoomIcon />
          Ver
        </button>
      </div>
    </Container>
  )
}

export default SeeDocumentFile
