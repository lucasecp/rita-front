import React from 'react'

import { Container } from './styles'

function Textarea({ label, ...rest }) {
  return (
    <Container {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <textarea id={label} {...rest} />
    </Container>
  )
}

export default Textarea
