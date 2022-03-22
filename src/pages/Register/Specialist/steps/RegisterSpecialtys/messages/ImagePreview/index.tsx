import React from 'react'

import { Container } from './styles'

const ImagePreview: React.FC<{ file: any }> = ({ file }) => {
  const sourceFile = URL.createObjectURL(file)

  return (
    <Container>
      <img src={sourceFile} />
    </Container>
  )
}

export default ImagePreview
