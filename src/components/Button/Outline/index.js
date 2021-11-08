import React from 'react'

import { Container } from './styles'

function OutlineButton({
  children,
  type,
  variation,
  small,
  disabledWithEvents,
  ...rest
}) {
  // Change the variation to color

  return (
    <Container type={type} variation={variation} small={small} disabledWithEvents={disabledWithEvents} {...rest}>
      {children}
    </Container>
  )
}

export default OutlineButton
