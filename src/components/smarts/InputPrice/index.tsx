import React, { InputHTMLAttributes, useEffect } from 'react'
import MsgError from '../../MsgError'
import { Container } from './styles'
import onlyNumbers from '@/helpers/clear/onlyNumbers'
import formatPrice from '@/helpers/formatPrice'

export type valuePriceType = {
  formated: string | number
  clean: string | number
}

interface InputPriceProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  setValue?: (value: valuePriceType) => void
  hasError?: boolean
  type?: string
  msgError?: string
  variation?: 'secondary'
  initialValue?: string | number
  [x: string]: any
}

const InputPrice: React.FC<InputPriceProps> = ({
  label = '',
  setValue,
  hasError = false,
  type = 'text',
  msgError = '',
  variation = '',
  initialValue,
  ...rest
}) => {
  const formatToApi = (value: string | number) => {
    return Number(
      String(value).replace('R$', '').replace('.', '').replace(',', '.'),
    )
  }

  const setValues = (formated: string, clean: string | number) => {
    setValue({ formated, clean })
  }

  const formatPriceOnChange = (value: string | number) => {
    if (!setValue) return

    if (!value) {
      return setValues('', '')
    }

    let newValue: number | string = onlyNumbers(value)

    newValue = newValue.replace(/([0-9]{2})$/g, ',$1')

    if (newValue.length > 6) {
      newValue = newValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    const formatedValue = 'R$ ' + newValue

    setValues(formatedValue, formatToApi(formatedValue))

    if (newValue === 'NaN') setValues('', '')
  }

  useEffect(() => {
    initialValue && setValues(formatPrice(initialValue), initialValue)
  }, [])

  return (
    <Container variation={variation} hasError={msgError || hasError} {...rest}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={label}
        onChange={(e) => formatPriceOnChange(e.target.value)}
        {...rest}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default InputPrice
