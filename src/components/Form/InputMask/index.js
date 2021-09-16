import React from 'react'

import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

function InputMask({ setValue, label,hasError, ...rest }) {
  return (
    <Container hasError={hasError}>
      {label && <label htmlFor={label}>{label}</label>}
      <ReactInputMask
        id={label}
        onChange={(event) => setValue(event.target.value)}
        {...rest}
      />
    </Container>
  )
}

export default InputMask
