import React from 'react'

import { Container } from './styles'

interface PreviewImageProps {
  source: string
}

export const PreviewImage: React.FC<PreviewImageProps> = ({ source }) => {
  return (
    <Container>
      <img src={source} />
    </Container>
  )
}
