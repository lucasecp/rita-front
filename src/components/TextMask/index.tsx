import React from 'react'
import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

interface TextMaskProps {
  text: string
  mask: string
}

export const TextMask: React.FC<TextMaskProps> = ({ text, mask }) => {
  return (
    <Container>
      <ReactInputMask disabled mask={mask} value={text} />
    </Container>
  )
}
