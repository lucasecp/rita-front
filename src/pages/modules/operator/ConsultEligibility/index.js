import React, { useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { Container } from './styles'
import InputMask from '@/components/Form/InputMask'
import ButtonPrimary from '@/components/Button/Primary'

export const ConsultEligibility = () => {
  const [cpf, setCpf] = useState('')

  const onConfirmCpf = () => {
    console.log(cpf)
    console.log('Confirm Cpf')
  }

  return (
    <DefaultLayout title="Consulta de Elegibilidade">
      <Container>
        <InputMask
          label="Informe o CPF*:"
          mask="999.999.999-99"
          placeholder="000.000.000-00"
          value={cpf}
          setValue={setCpf}
        />
        <ButtonPrimary onClick={onConfirmCpf}>Confirmar</ButtonPrimary>
      </Container>
    </DefaultLayout>
  )
}
