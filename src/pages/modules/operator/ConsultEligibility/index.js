import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import InputMask from '@/components/Form/InputMask'
import ButtonPrimary from '@/components/Button/Primary'
import validateCpf from '@/helpers/validateCpf'

import { CpfActive } from './messages/CpfActive'
import { CpfPendingOrWaiting } from './messages/CpfPendingOrWaiting'
import { CpfInactiveOrDenied } from './messages/CpfInactiveOrDenied'

import { Container } from './styles'

import { typesResponses } from './services'
import { useModal } from '@/hooks/useModal'

export const ConsultEligibility = () => {
  const initialCpfError = { hasError: false, message: '' }

  const [cpf, setCpf] = useState('')
  const [errorInCpf, setErrorInCpf] = useState(initialCpfError)

  const { showMessage } = useModal()

  const onConfirmCpf = () => {
    setErrorInCpf(initialCpfError)

    // if (!cpf.length) {
    //   setErrorInCpf({
    //     hasError: true,
    //     message: 'O campo CPF deve ser informado.',
    //   })

    //   return
    // }

    // if (!validateCpf(cpf)) {
    //   setErrorInCpf({
    //     hasError: true,
    //     message: 'Informe um CPF válido.',
    //   })

    //   return
    // }

    // Integração com o back

    const responseApiMessage = typesResponses.CPF_NOT_FOUND
    const responseApiData = { table: 'Especial' }

    if (responseApiMessage === typesResponses.CPF_NOT_FOUND) {
      toast.error('CPF não encontrado!')
      setErrorInCpf({
        hasError: true,
      })
    }

    if (responseApiMessage === typesResponses.CPF_IS_ACTIVE) {
      showMessage(CpfActive, { cpf, table: responseApiData.table })
    }

    if (responseApiMessage === typesResponses.CPF_IS_INACTIVE_OR_DENIED) {
      showMessage(CpfInactiveOrDenied, { cpf })
    }

    if (responseApiMessage === typesResponses.CPF_IS_PENDING_OR_WAITING) {
      showMessage(CpfPendingOrWaiting, { cpf })
    }
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
