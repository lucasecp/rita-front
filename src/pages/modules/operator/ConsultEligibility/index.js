import React, { useRef, useState } from 'react'
import { toast } from '@/styles/components/toastify'

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
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'

export const ConsultEligibility = () => {
  const initialCpfError = { hasError: false, message: '' }

  const [cpf, setCpf] = useState('')
  const [errorInCpf, setErrorInCpf] = useState(initialCpfError)

  const { Loading } = useLoading()
  const { showMessage, showSimple } = useModal()

  const cpfInputRef = useRef(null)

  const hasErrorInInputCpf = () => {
    if (!cpf.length) {
      setErrorInCpf({
        hasError: true,
        message: 'O campo CPF deve ser informado.',
      })

      return true
    }

    if (!validateCpf(cpf)) {
      setErrorInCpf({
        hasError: true,
        message: 'Informe um CPF válido.',
      })

      return true
    }

    return false
  }

  const mapResponseFromApi = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.get('/paciente/elegibilidade', {
        params: { cpf },
      })

      switch (response.data.status) {
        case 'A':
          if (!response.data.tabela) {
            return [typesResponses.CPF_IS_INACTIVE_OR_DENIED]
          }

          return [typesResponses.CPF_IS_ACTIVE, { table: response.data.tabela }]

        case 'P':
        case 'D':
          return [typesResponses.CPF_IS_PENDING_OR_WAITING]

        case 'I':
        case 'N':
        case 'NE':
          return [typesResponses.CPF_IS_INACTIVE_OR_DENIED]

        default:
          console.log(response)
          return [typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR]
      }
    } catch ({ response }) {
      if (response.status.toString()[0] === '4') {
        switch (response.data.message) {
          case 'Nenhum usuário encontrado na base de dados':
            return [typesResponses.CPF_NOT_FOUND]

          case 'Unauthorized':
            history.push('/login')
            return

          default:
            console.log(response)
            return [typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR]
        }
      }

      if (response.status.toString()[0] === '5') {
        console.log(response)
        return [typesResponses.INTERNAL_SERVER_ERROR]
      }
    } finally {
      Loading.turnOff()
    }
  }

  const showEligiblility = (responseApiMessage, responseApiData) => {
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

    if (responseApiMessage === typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR) {
      showSimple.error('Erro não tratado!')
    }

    if (responseApiMessage === typesResponses.INTERNAL_SERVER_ERROR) {
      showSimple.error('Erro no Servidor!')
    }
  }

  const onConfirmCpf = async (event) => {
    event.preventDefault()

    setErrorInCpf(initialCpfError)

    if (hasErrorInInputCpf()) {
      cpfInputRef.current.focus()
      return
    }

    const [responseApiMessage, responseApiData] = await mapResponseFromApi()

    showEligiblility(responseApiMessage, responseApiData)
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
          inputRef={(ref) => (cpfInputRef.current = ref)}
        />
        <ButtonPrimary type="submit" onClick={onConfirmCpf}>
          Confirmar
        </ButtonPrimary>
      </Container>
    </DefaultLayout>
  )
}
