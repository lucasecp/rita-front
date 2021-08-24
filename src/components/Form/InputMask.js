import React from 'react'

import mask from '../../helpers/mask'

import { Container, Input } from './style'

const InputMask = (props) => {
  const containsNumbers = (value) => new RegExp('^[0-9]*$').test(value)

  const handleChange = (e) => {
    // Forçando o usuário a digitar somente números
    if (
      !(
        !containsNumbers(e.target.value.replace(/(\.|\/|-)/g, '')) &&
        props.mask === '###.###.###-##'
      )
    ) {
      props.setValue(mask(e.target.value, props.mask))
    }
  }

  return (
    <Container>
      <label htmlFor={props.label}>{props.label}</label>
      <Input
        type="tel"
        id={props.label}
        onChange={handleChange}
        value={props.value}
        maxLength={props.maxLength}
        placeholder={props.placeHolder}
      />
    </Container>
  )
}

export default InputMask
