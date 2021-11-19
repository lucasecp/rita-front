import React from 'react'

import { Container } from './styles'

function ButtonPrimary({ children, small,disabledWithEvents,medium, ...rest }) {
  return (
    <Container {...rest} small={small} medium={medium} disabledWithEvents={disabledWithEvents}>
      {children}
    </Container>
  )
}

export default ButtonPrimary
