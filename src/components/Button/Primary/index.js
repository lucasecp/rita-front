import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children, ...rest }) {
  return (
    <Container {...rest}>
      <span>{children}</span>
    </Container>
  )
}

export default ButtonPrimary
