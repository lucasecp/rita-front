import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IButtonOutline extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean
  medium?: boolean
  variation?: string
}

const OutlineButton: React.FC<IButtonOutline> = ({
  children,
  small,
  medium,
  ...rest
}) => {
  // Change the variation to color

  return (
    <Container {...rest} small={small} medium={medium}>
      {children}
    </Container>
  )
}

export default OutlineButton
