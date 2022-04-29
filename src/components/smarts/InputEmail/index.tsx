import React, {
  useEffect,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react'

import InputText from '@/components/Form/InputText'

import { specialCharacters } from './constants/specialCharacters'
import isEmail from '@/helpers/isEmail'

interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
  initialEmail?: string
  onGetEmail?: React.Dispatch<React.SetStateAction<string>>
  checkHasError?: number
  hasError?: (hasError: boolean) => void
  label?: string
}

export const InputEmail: React.FC<InputEmailProps> = ({
  initialEmail,
  onGetEmail = () => null,
  checkHasError,
  hasError,
  label,
  ...rest
}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showEmailError, setShowEmailError] = useState('')
  const [isToLoadInitialEmail, setIsToLoadInitialEmail] = useState(true)

  useEffect(() => {
    if (isToLoadInitialEmail) {
      setEmail(initialEmail || '')
    }

    if (initialEmail) {
      setIsToLoadInitialEmail(false)
    }
  }, [initialEmail])

  useEffect(() => {
    onGetEmail(email)

    setEmailError('')

    if (!email.trim()) {
      setEmailError('Email Obrigatório')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email inválido.')
    }
  }, [email])

  useEffect(() => {
    if (hasError) {
      hasError(!!emailError)
    }
  }, [emailError])

  const validateEmailError = (email: string) => {
    if (!email.trim()) {
      setEmailError('Email Obrigatório.')
    } else if (!isEmail(email)) {
      setEmailError('Email inválido.')
    }
  }

  useEffect(() => {
    validateEmailError(email)
    setShowEmailError(emailError)
  }, [checkHasError])

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

    const emailUpdated = valueWithNoSymbols

    setEmail(emailUpdated)
    setEmailError('')

    validateEmailError(emailUpdated)
  }
  return (
    <InputText
<<<<<<< HEAD
      label={label || 'Email:'}
=======
      label="Email*:"
>>>>>>> e86b4b672e22bfdd90593d7c42da0721e743407b
      name="email"
      value={email}
      onChange={onGetValue}
      hasError={!!showEmailError}
      msgError={showEmailError}
      maxLength={100}
      {...rest}
    />
  )
}
