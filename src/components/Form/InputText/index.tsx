import hasLetter from '@/helpers/hasLetter'
import hasNumber from '@/helpers/hasNumber'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import React, { InputHTMLAttributes } from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  hasError?: boolean
  type?: string
  msgError?: string
  variation?: 'secondary'
  onlyLetter?: boolean
  onlyNumber?: boolean
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

    setValue(target.value)
  }

  return (
    <Container variation={variation} hasError={msgError || hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <input type={type} id={label} onChange={handleChange} {...rest} />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputText
