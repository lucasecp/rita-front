import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IButtonPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean
  medium?: boolean
  block?: boolean
  disabledWithEvents?: boolean
  variation?: string
}

const ButtonPrimary: React.FC<IButtonPrimary> = ({
  children,
  small = false,
  medium = false,
  block = false,
  disabledWithEvents = false,
  variation,
  ...rest
}) => {
  return (
    <Container
      type="button"
      {...rest}
      small={small}
      medium={medium}
      block={block}
      disabledWithEvents={disabledWithEvents}
      variation={variation}
    >
      {children}
    </Container>
  )
}

export default ButtonPrimary
