import React from 'react'

import { Container } from './styles'

function Textarea({
  label,
  setValue,
  limit,
  showCaractersInformation,
  value,
  ...rest
}) {
  const onChangeText = (event) => {
    const { value } = event.target

    if (value.length <= limit) {
      setValue(value)
    }
  }

  return (
    <Container {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <textarea id={label} onChange={onChangeText} value={value} {...rest} />
      {showCaractersInformation && (
        <p>
          ({value?.length || 0} de {limit} caracteres)
        </p>
      )}
    </Container>
  )
}

export default Textarea
