import React from 'react'

import { Container } from './styles'

function PreviewImage({ source }) {
  return (
    <Container>
      <img src={source} />
    </Container>
  )
}

export default PreviewImage
