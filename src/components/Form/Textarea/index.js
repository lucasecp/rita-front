import React from 'react'

import { Container } from './styles'

function Textarea({ label, setValue, limit, ...rest }) {
  const onChangeText = (event) => {
    const { value } = event.target

    if (value.length < limit) {
      setValue(value)
    }
  }

  return (
    <Container {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <textarea id={label} onChange={onChangeText} {...rest} />
    </Container>
  )
}

export default Textarea
