import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children, small,disabledWithEvents, ...rest }) {
  return (
    <Container {...rest} small={small} disabledWithEvents={disabledWithEvents}>
      {children}
    </Container>
  )
}

export default ButtonPrimary
