import React from 'react'

import mask from '../../helpers/mask'

import { Container, Input } from './style'

const InputMask = ({
  label,
  mask: maskFormat,
  placeHolder,
  type,
  setValue,
  ...rest
}) => {
  const containsNumbers = (value) => new RegExp('^[0-9]*$').test(value)

  const handleChange = (e) => {
    if (containsNumbers(e.target.value.replace(/(\.|\/|-)/g, '')))
      setValue(mask(e.target.value, maskFormat))
  }

  return (
    <Container>
      {label && <label htmlFor={label}>{label}</label>}
      <Input
        type={type || 'tel'}
        id={label}
        onChange={handleChange}
        placeholder={placeHolder}
        {...rest}
      />
    </Container>
  )
}

export default InputMask
