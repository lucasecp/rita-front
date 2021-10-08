import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children,small, ...rest }) {
  return <Container {...rest} small>{children}</Container>
}

export default ButtonPrimary
