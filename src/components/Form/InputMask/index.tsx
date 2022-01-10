import MsgError from '@/components/MsgError'
import React from 'react'

import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

interface InputMaskProps {
  label?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  hasError?: boolean
  type?: string
  msgError?: string
  variation?: 'secondary'
  mask: string
  value?: string
}

const InputMask: React.FC<InputMaskProps> = ({
  setValue,
  label,
  hasError,
  msgError,
  variation,
  mask,
  value,
  ...rest
}) => {
  return (
    <Container hasError={msgError || hasError} variation={variation}>
      {label && <label htmlFor={label}>{label}</label>}
      <ReactInputMask
        value={value}
        mask={mask}
        id={label}
        onChange={(event) => setValue && setValue(event.target.value)}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputMask
