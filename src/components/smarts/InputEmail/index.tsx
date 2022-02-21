import React, {
  useEffect,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react'

import InputText from '@/components/Form/InputText'

import { specialCharacters } from './constants/specialCharacters'

interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
  initialEmail?: string
  onGetEmail: React.Dispatch<React.SetStateAction<string>>
  checkHasError: number
  hasError: (hasError: boolean) => void
  label?: string
}

export const InputEmail: React.FC<InputEmailProps> = ({
  initialEmail,
  onGetEmail,
  checkHasError,
  hasError,
  label,
  ...rest
}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    setEmail(initialEmail || '')
  }, [initialEmail])

  useEffect(() => {
    onGetEmail(email)
  }, [email])

  useEffect(() => {
    if (checkHasError) {
      if (!email.trim()) {
        return setEmailError('Email Obrigatório')
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        return setEmailError('Email inválido.')
      }
      return setEmailError('')
    }
  }, [checkHasError])

  useEffect(() => {
    if (hasError) {
      hasError(!!emailError)
    }
  }, [emailError])

  const onGetValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    const valueLoweredCase = value.toLowerCase()

    const valueWithNoAccents = valueLoweredCase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const specialSymbols = specialCharacters

    let valueWithNoSymbols = valueWithNoAccents

    specialSymbols.forEach((symbol) => {
      valueWithNoSymbols = valueWithNoSymbols.replace(symbol, '')
    })

    setEmail(valueWithNoSymbols)
  }

  return (
    <InputText
      label={label || 'Email:'}
      name="email"
      hasError={!!emailError}
      value={email}
      onChange={onGetValue}
      msgError={emailError}
      maxLength={100}
      {...rest}
    />
  )
}
