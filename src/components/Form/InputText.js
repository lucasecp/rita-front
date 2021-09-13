import React from 'react'
import { Container, Input } from './style'

const InputText = ({ label, setValue, hasError,type, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}
      <Input
        type={type || "text"}
        id={label}
        onChange={(e) => setValue(e.target.value)}
        hasError={hasError}
        {...rest}
      />
    </Container>
  )
}

export default InputText
