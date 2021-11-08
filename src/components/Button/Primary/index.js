import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children, small,disabledCss, ...rest }) {
  return (
    <Container {...rest} small={small} disabledCss={disabledCss}>
      {children}
    </Container>
  )
}

export default ButtonPrimary
