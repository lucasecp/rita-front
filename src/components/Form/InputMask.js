import React from 'react'
import toMask from '@/helpers/toMask'

import { Container, Input } from './style'

const InputMask = ({ label, mask, type, setValue, ...rest }) => {
  const containsNumbers = (value) => new RegExp('^[0-9]*$').test(value)

  const handleChange = (e) => {
    const value = e.target.value

    if (containsNumbers(value.replace(/^[0-9*#+.() -]+$/g, '')))
      setValue(toMask(value, mask))
  }

  return (
    <Container name="container-mask">
      {label && <label htmlFor={label}>{label}</label>}
      <Input
        type={type || 'tel'}
        id={label}
        onChange={handleChange}
        {...rest}
      />
    </Container>
  )
}

export default InputMask
