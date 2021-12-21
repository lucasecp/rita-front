import React from 'react'

import { Container } from './styles'

function Textarea({
  label,
  setValue,
  limit = 255,
  showCaractersInformation,
  value,
  hasError,
  messageError,
  ...rest
}) {
  const onChangeText = (event) => {
    const { value } = event.target

    if (value.length <= limit) {
      setValue(value)
    }
  }

  return (
    <Container hasError={hasError} >
      {label && <label htmlFor={label}>{label}</label>}
      <textarea id={label} onChange={onChangeText} value={value} {...rest} />
      <div>
        <small>{messageError}</small>
        {showCaractersInformation && (
          <p>
            ({value?.length || 0} de {limit} caracteres)
          </p>
        )}
      </div>
    </Container>
  )
}

export default Textarea
