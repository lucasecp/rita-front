import React from 'react'

import { Container } from './styles'

interface ImagePreviewProps {
  file: File
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ file }) => {
  const sourceFile = URL.createObjectURL(file)

  return (
    <Container>
      <img src={sourceFile} />
    </Container>
  )
}
