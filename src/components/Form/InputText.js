import React from 'react'
import MsgError from '../MsgError'
import { Container, Input } from './style'

const InputText = ({ label, setValue, hasError,type,msgError, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}
      <Input
        type={type || "text"}
        id={label}
        onChange={(e) => setValue!== undefined && setValue(e.target.value)}
        hasError={hasError}
        {...rest}
      />
     {msgError && <MsgError>{msgError}</MsgError>}

    </Container>
  )
}

export default InputText
