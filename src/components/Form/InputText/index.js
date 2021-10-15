import hasNumber from '@/helpers/hasNumber'
import React from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'

const InputText = ({
  label,
  setValue,
  hasError,
  type,
  msgError,
  variation,
  onlyLetter,
  ...rest
}) => {
  
  const handleChange = ({ target }) => {
    if (!setValue) return

    if (onlyLetter && hasNumber(target.value)) {
      return
    }

    setValue(target.value)
  }

  return (
    <Container variation={variation} hasError={msgError || hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type || 'text'}
        id={label}
        onChange={handleChange}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputText
