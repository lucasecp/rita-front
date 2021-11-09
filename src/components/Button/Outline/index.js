import React from 'react'

import { Container } from './styles'

function OutlineButton({ children, ...rest }) {
  // Change the variation to color

  return <Container {...rest}>{children}</Container>
}

export default OutlineButton
