import React, { useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { Container } from './styles'
import InputMask from '@/components/Form/InputMask'
import ButtonPrimary from '@/components/Button/Primary'

export const ConsultEligibility = () => {
  const initialCpfError = { hasError: false, message: '' }

  const [cpf, setCpf] = useState('')
  const [errorInCpf, setErrorInCpf] = useState(initialCpfError)

  const onConfirmCpf = () => {
    setErrorInCpf(initialCpfError)
    console.log(cpf)

    if (!cpf.length) {
      setErrorInCpf({
        hasError: true,
        message: 'O campo CPF deve ser informado.',
      })
    }
    console.log(cpf)
    console.log('Confirm Cpf')
  }

  return (
    <DefaultLayout title="Consulta de Elegibilidade">
      <Container hasMessage={errorInCpf.message}>
        <InputMask
          label="Informe o CPF*:"
          mask="999.999.999-99"
          placeholder="000.000.000-00"
          value={cpf}
          setValue={setCpf}
          hasError={errorInCpf.hasError}
          msgError={errorInCpf.message}
        />
        <ButtonPrimary onClick={onConfirmCpf}>Confirmar</ButtonPrimary>
      </Container>
    </DefaultLayout>
  )
}
