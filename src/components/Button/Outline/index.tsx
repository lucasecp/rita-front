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
    <Container
      data-test={`outlineButton-${children}`}
      small={small}
      medium={medium}
      {...rest}
    >
      {children}
    </Container>
  )
}

export default OutlineButton
