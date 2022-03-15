import messageError from '@/components/messageError'
import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  setValue?: (value: string) => void
  hasError?: boolean
  type?: string
  messageError?: string
  variation?: 'secondary'
  value?: string | number
  disabled?: boolean
  onBlur?: () => void
  onKeyUp?: () => void
  [x: string]: any
}

const InputCurrency: React.FC<InputMaskProps> = ({
  setValue,
  label,
  hasError,
  messageError,
  ...rest
}) => {
  const onChange = (response: any) => {
    const element = response.target
    let value = element.value

    value = value + ''
    value = parseInt(value.replace(/[\D]+/g, ''))
    value = value + ''
    value = value.replace(/([0-9]{2})$/g, ',$1')

    if (value.replace(',', '').length === 2) {
      value = '0' + value
    }

    if (value.replace(',', '').length === 1) {
      value = '0,0' + value
    }

    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    element.value = value
    if (value == 'NaN' || value == 0) element.value = ''

    setValue(value.replace(',', '').replace('.', ''))
  }

  return (
    <>
      <Container hasError={messageError || hasError} {...rest}>
        {label && <label htmlFor={label}>{label}</label>}
        <div>
          <span>R$ </span>
          <input onChange={onChange} defaultValue={'0,00'} />
        </div>
        {messageError && <small>{messageError}</small>}
      </Container>
    </>
  )
}

export default InputCurrency
