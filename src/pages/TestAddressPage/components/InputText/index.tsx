import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  disabled?: boolean
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  disabled,
  ...rest
}) => {
  return (
    <Container disabled={disabled}>
      <label>{label}</label>
      <input type="text" disabled={disabled} {...rest} />
    </Container>
  )
}
