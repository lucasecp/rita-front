import hasLetter from '@/helpers/hasLetter'
import hasNumber from '@/helpers/hasNumber'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import React, { InputHTMLAttributes } from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  setValue?: (value: string) => void
  hasError?: boolean
  type?: string
  msgError?: string
  variation?: 'secondary'
  onlyLetter?: boolean
  onlyNumber?: boolean
  noSpecialCaracter?: boolean
  [x: string]: any
}

const InputText: React.FC<InputTextProps> = ({
  label = '',
  setValue,
  hasError = false,
  type = 'text',
  msgError = '',
  variation = '',
  onlyLetter = false,
  onlyNumber = false,
  noSpecialCaracter,
  ...rest
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return

    if (
      (onlyLetter && hasNumber(target.value)) ||
      (onlyLetter && hasSpecialCaracter(target.value))
    ) {
      return
    }
    if (
      (onlyNumber && hasSpecialCaracter(target.value)) ||
      (onlyNumber && hasLetter(target.value))
    ) {
      return
    }

    if (noSpecialCaracter && hasSpecialCaracter(target.value)) {
      return
    }

    setValue(target.value)
  }

  return (
    <Container variation={variation} hasError={msgError || hasError} {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={label}
        onChange={handleChange}
        data-test={`inputText-${label}`}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputText
