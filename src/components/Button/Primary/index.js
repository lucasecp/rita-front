import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children, ...rest }) {
  return (
    <Container {...rest}>
     {children}
    </Container>
  )
}

export default ButtonPrimary
