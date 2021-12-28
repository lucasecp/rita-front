import React, { TextareaHTMLAttributes } from 'react'

import { Container } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  limit?: number | string
  showCaractersInformation?: boolean
  hasError?: boolean
  messageError?: string
}

const Textarea: React.FC<TextareaProps> = ({
  label = '',
  value,
  setValue,
  limit = 255,
  showCaractersInformation = false,
  hasError = false,
  messageError = '',
  ...rest
}) => {
  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target

    if (value.length <= limit) {
      setValue(value)
    }
  }

  return (
    <Container hasError={hasError}>
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
