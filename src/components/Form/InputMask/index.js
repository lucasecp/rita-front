import MsgError from '@/components/MsgError'
import React from 'react'

import ReactInputMask from 'react-input-mask'

import { Container } from './styles'

function InputMask({ setValue, label,hasError,msgError,variation, ...rest }) {
  return (
    <Container hasError={hasError} variation={variation}>
      {label && <label htmlFor={label}>{label}</label>}
      <ReactInputMask
        id={label}
        onChange={(event) => setValue(event.target.value)}
        {...rest}
      />
          {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputMask
