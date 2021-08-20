import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children }) {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  )
}

export default ButtonPrimary
