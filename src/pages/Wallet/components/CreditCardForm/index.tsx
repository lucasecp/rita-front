import React, { useState } from 'react'
import { Container } from './styles'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { Checkbox } from '@/components/Form/Checkbox'

import validateCreditCardNumberAsBoolean from '@/helpers/validateCreditCardNumber'
import validateCreditCardExpirationDateAsBoolean from '@/helpers/validateCreditCardExpirationDate'
import validateCreditCardSecurityCodeAsBoolean from '@/helpers/validateCreditCardSecurityCode'

type CreditCardFormProps = {
  resetOnCancel?: boolean
  onSubmit?: (model: any) => void
  onCancel?: () => void
}

type CreditCardFormErrors = {
  number?: string
  expireAt?: string
  securityCode?: string
  name?: string
}

function validateCreditCardNumber(value: string) {
  return validateCreditCardNumberAsBoolean(value)
    ? ''
    : 'Cartão de crédito inválido'
}

function validateCreditCardExpirationDate(value: string) {
  return validateCreditCardExpirationDateAsBoolean(value)
    ? ''
    : 'Data de expiração do cartão de crédito inválida'
}

function validateCreditCardSecurityCode(code: string, number: string) {
  return validateCreditCardSecurityCodeAsBoolean(code, number)
    ? ''
    : 'Código de segurança do cartão de crédito inválido'
}

function validateName(value?: string | null) {
  return [null, undefined, ''].includes(value) ? 'Nome é obrigatório.' : ''
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  resetOnCancel = true,
  onSubmit,
  onCancel = undefined,
}) => {
  const [number, setNumber] = useState('')
  const [expireAt, setExpireAt] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [name, setName] = useState('')
  const [asDefault, setAsDefault] = useState(false)
  const [errors, setErrors] = useState<CreditCardFormErrors>({})

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const newErrors = {
      number: validateCreditCardNumber(number),
      expireAt: validateCreditCardExpirationDate(expireAt),
      securityCode: validateCreditCardSecurityCode(securityCode, number),
      name: validateName(name),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')

    setErrors(newErrors)

    if (!hasErrors) {
      onSubmit &&
        onSubmit({
          number,
          expireAt,
          securityCode,
          name,
          asDefault,
        })

      setErrors({})
      setNumber('')
      setExpireAt('')
      setSecurityCode('')
      setName('')
    }
  }

  function handleReset() {
    if (resetOnCancel) {
      setErrors({})
      setNumber('')
      setExpireAt('')
      setSecurityCode('')
      setName('')
    }

    onCancel && onCancel()
  }

  return (
    <Container onSubmit={handleSubmit} onReset={handleReset}>
      <section>
        <InputText
          label="Número do cartão:"
          value={number}
          setValue={setNumber}
          name="number"
          hasError={Boolean(errors.number)}
          msgError={errors.number}
          onBlur={() =>
            setErrors({ ...errors, number: validateCreditCardNumber(number) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, number: validateCreditCardNumber(number) })
          }
        />
      </section>

      <InputMask
        mask="19/99"
        formatChars={{ 1: '[0-1]', 9: '[0-9]' }}
        label="Data de Validade:"
        value={expireAt}
        setValue={setExpireAt}
        name="expireAt"
        hasError={Boolean(errors.expireAt)}
        msgError={errors.expireAt}
        onBlur={() =>
          setErrors({
            ...errors,
            expireAt: validateCreditCardExpirationDate(expireAt),
          })
        }
        onKeyUp={() =>
          setErrors({
            ...errors,
            expireAt: validateCreditCardExpirationDate(expireAt),
          })
        }
      />

      <InputMask
        mask="999"
        label="CVC:"
        value={securityCode}
        setValue={setSecurityCode}
        name="securityCode"
        hasError={Boolean(errors.securityCode)}
        msgError={errors.securityCode}
        onBlur={() =>
          setErrors({
            ...errors,
            securityCode: validateCreditCardSecurityCode(
              securityCode,
              number,
            ),
          })
        }
        onKeyUp={() =>
          setErrors({
            ...errors,
            securityCode: validateCreditCardSecurityCode(
              securityCode,
              number,
            ),
          })
        }
      />

      <section>
        <InputText
          label="Nome impresso no cartão:"
          value={name}
          setValue={setName}
          name="name"
          hasError={Boolean(errors.name)}
          msgError={errors.name}
          onBlur={() => setErrors({ ...errors, name: validateName(name) })}
          onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
        />
      </section>

      <section>
        <Checkbox
          setValue={setAsDefault}
          checked={asDefault}
          label="Definir como padrão"
        />
      </section>

      <footer>
        <OutlineButton type="reset">Cancelar</OutlineButton>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
      </footer>
    </Container>
  )
}
