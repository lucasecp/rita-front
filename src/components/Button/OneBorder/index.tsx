import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonOneBorderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean
  variation?: string
}

export const ButtonOneBorder: React.FC<ButtonOneBorderProps> = ({
  children,
  variation,
  ...rest
}) => {
  // Change the variation to color

  return (
    <Container variation={variation} {...rest}>
      {children}
    </Container>
  )
}
