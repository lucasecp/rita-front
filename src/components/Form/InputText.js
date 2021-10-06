import React from 'react'
import MsgError from '../MsgError'
import { Container } from './style'

const InputText = ({ label, setValue, hasError,type,msgError, ...rest }) => {
  return (
    <Container hasError={hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type || "text"}
        id={label}
        onChange={(e) => setValue!== undefined && setValue(e.target.value)}
        {...rest}
      />
     {msgError && <MsgError>{msgError}</MsgError>}

    </Container>
  )
}

export default InputText
