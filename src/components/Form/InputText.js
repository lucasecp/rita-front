import React from 'react'
import { Container, Input } from './style'

const InputText = (props) => {
  return (
    <Container>
      {props.label && <label htmlFor={props.label}>{props.label}</label>}
      <Input
        type="text"
        value={props.value}
        id={props.label}
        placeholder={props.placeHolder}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </Container>
  )
}

export default InputText
