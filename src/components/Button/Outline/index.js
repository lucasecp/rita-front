import React from 'react'

import { Container } from './styles'

function OutlineButton({
  children,
  type,
  variation,
  small,
  disabledCss,
  ...rest
}) {
  // Change the variation to color

  return (
    <Container type={type} variation={variation} small={small} disabledCss={disabledCss} {...rest}>
      {children}
    </Container>
  )
}

export default OutlineButton
