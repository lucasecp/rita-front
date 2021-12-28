import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IButtonPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean
  disabledWithEvents?: boolean
  medium?: boolean
  variation?: string
}

const ButtonPrimary: React.FC<IButtonPrimary> = ({
  children,
  small = false,
  disabledWithEvents = false,
  medium = false,
  variation = 'none',
  ...rest
}) => {
  return (
    <Container
      {...rest}
      small={small}
      medium={medium}
      disabledWithEvents={disabledWithEvents}
    >
      {children}
    </Container>
  )
}

export default ButtonPrimary
