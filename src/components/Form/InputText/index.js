import React from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'

const InputText = ({ label, setValue, hasError, type, msgError, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type || 'text'}
        id={label}
        onChange={(e) => setValue !== undefined && setValue(e.target.value)}
        hasError={hasError}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputText
