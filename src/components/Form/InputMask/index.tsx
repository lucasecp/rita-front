import MsgError from '@/components/MsgError'
import React, { InputHTMLAttributes } from 'react'

import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  setValue?: (value: string) => void
  hasError?: boolean
  type?: string
  msgError?: string
  variation?: 'secondary'
  mask: string
  value?: string
  disabled?: boolean
  onBlur?: () => void
  onKeyUp?: () => void
  [x: string]: any
}

const InputMask: React.FC<InputMaskProps> = ({
  setValue,
  label,
  hasError,
  msgError,
  variation,
  mask,
  value,
  disabled,
  ...rest
}) => {
  return (
    <Container hasError={msgError || hasError} variation={variation} {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <ReactInputMask
        value={value}
        mask={mask}
        id={label}
        onChange={(event) => setValue && setValue(event.target.value)}
        disabled={disabled}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputMask
