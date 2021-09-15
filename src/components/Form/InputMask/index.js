import React from 'react'

import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

function InputMask({ setValue, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}
      <ReactInputMask
        {...rest}
        id={label}
        onChange={(event) => setValue(event.target.value)}
      />
    </Container>
  )
}

export default InputMask
