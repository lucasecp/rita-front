import React from 'react'

import { Container } from './styles'

function ImagePreview({ file }) {
  const sourceFile = URL.createObjectURL(file)

  return (
    <Container>
      <img src={sourceFile} />
    </Container>
  )
}

export default ImagePreview
