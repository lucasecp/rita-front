import React from 'react'

import { Container } from './styles'

function ButtonOneBorder({ children, type, variation, small, ...rest }) {
  // Change the variation to color

  return (
    <Container type={type} variation={variation} small={small} {...rest}>
      {children}
    </Container>
  )
}

export default ButtonOneBorder
