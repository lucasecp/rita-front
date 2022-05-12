import React from 'react'

import { Container } from './styles'

function ButtonLink({ children, ...rest }) {
  return (
    <Container data-test={`buttonLink${children}`} {...rest}>
      {children}
    </Container>
  )
}

export default ButtonLink
