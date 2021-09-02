import React from 'react'
import { Container } from './style'

const BootstrapButton = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

export default BootstrapButton
