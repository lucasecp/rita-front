import { DefaultLayout } from '../../../components/Layout/DefaultLayout'
import React, { useState } from 'react'

import { Container } from './styles'
import { InputPassword } from '@/components/Form/InputPassword'
import ButtonPrimary from '@/components/Button/Primary'

import hasLetter from '@/helpers/hasLetter'
import hasNumber from '@/helpers/hasNumber'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'

import { typesResponses } from './services'

import { useModal } from '@/hooks/useModal'
import { useAuth } from '@/hooks/login'
import apiUser from '@/services/apiUser'
import { useLoading } from '@/hooks/useLoading'

export const ChangePassword = () => {
  const { showSimple } = useModal()
  const { cpf } = useAuth().user
  const { Loading } = useLoading()

  const [oldPassword, setOldPassword] = useState('')

  const [newPassword, setNewPassword] = useState('')

  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [errors, setErrors] = useState({})

  const findErrorsInFields = () => {
    const newErrors = {}

    if (!oldPassword.length) {
      newErrors.oldPassword = {
        hasError: true,
        message:
          'O campo “Digite sua senha atual” é obrigatório, verifique seu preenchimento.',
      }
    }

    if (newPassword !== confirmNewPassword) {
      newErrors.newPassword = {
        hasError: true,
        message: 'As senhas não conferem, favor revisar os campos.',
      }

      newErrors.confirmNewPassword = {
        hasError: true,
      }
    }

    if (
      !hasSpecialCaracter(newPassword) ||
      !hasLetter(newPassword) ||
      !hasNumber(newPassword) ||
      newPassword.length < 6 ||
      newPassword.includes(' ')
    ) {
      newErrors.newPassword = {
        hasError: true,
        message:
          'A senha informada não atende aos critérios de segurança, por favor verifique e tente novamente.',
      }
    }

    if (!newPassword.length) {
      newErrors.newPassword = {
        hasError: true,
        message:
          'O campo “Digite sua nova senha” é obrigatório, verifique seu preenchimento.',
      }
    }

    if (!confirmNewPassword.length) {
      newErrors.confirmNewPassword = {
        hasError: true,
        message:
          'O campo “Confirme sua nova senha” é obrigatório, verifique seu preenchimento.',
      }
    }

    setErrors(newErrors)

    return !isObjectEmpty(newErrors)
  }

  const mapResponseFromApi = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.post('/senha', {
        cpf,
        senhaAntiga: oldPassword,
        senhaNova: newPassword,
        confirmacaoSenha: confirmNewPassword,
      })

      switch (response.data.mensagem) {
        case 'Sucesso':
          return [typesResponses.PASSWORD_CHANGED_SUCCESSFULLY]

        default:
          console.log(response)
          return [typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR]
      }
    } catch ({ response }) {
      if (response.status.toString()[0] === '4') {
        switch (response.data.message) {
          case 'Senha antiga incorreta':
            return [typesResponses.INCORRECT_PASSWORD]

          case 'Nova senha não pode ser igual a antiga':
            return [typesResponses.SAME_PASSWORD_AS_OLD]

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

  const showPasswordChanged = (responseApiMessage) => {
    const newErrors = {}

    if (responseApiMessage === typesResponses.PASSWORD_CHANGED_SUCCESSFULLY) {
      showSimple.success('Senha alterada com sucesso!')

      setOldPassword('')
      setNewPassword('')
      setConfirmNewPassword('')
    }

    if (responseApiMessage === typesResponses.SAME_PASSWORD_AS_OLD) {
      newErrors.newPassword = {
        hasError: true,
        message: 'A nova senha não pode ser a mesma da senha atual.',
      }

      newErrors.confirmNewPassword = {
        hasError: true,
      }

      setErrors(newErrors)
    }

    if (responseApiMessage === typesResponses.INCORRECT_PASSWORD) {
      newErrors.oldPassword = {
        hasError: true,
        message: 'Senha incorreta, por favor, verifique os dados informados.',
      }

      setErrors(newErrors)
    }

    if (responseApiMessage === typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR) {
      showSimple.error('Erro não tratado!')
    }

    if (responseApiMessage === typesResponses.INTERNAL_SERVER_ERROR) {
      showSimple.error('Erro no Servidor!')
    }
  }

  const onConfirmChangePassword = async (event) => {
    event.preventDefault()

    const hasErrors = findErrorsInFields()

    if (hasErrors) {
      return
    }

    const [responseApiMessage] = await mapResponseFromApi()

    showPasswordChanged(responseApiMessage)
  }

  return (
    <DefaultLayout title="Trocar senha">
      <Container>
        <h1>Preencha os campos abaixo para redefinir sua senha.</h1>
        <p>
          A senha deve conter letras, números e caracteres especiais. Mínimo 6
          dígitos. Sem espaços.
        </p>
        <form onSubmit={onConfirmChangePassword}>
          <InputPassword
            label="Digite sua senha atual*:"
            value={oldPassword}
            setValue={setOldPassword}
            hasError={errors.oldPassword?.hasError}
            messageError={errors.oldPassword?.message}
          />
          <small />
          <small />
          <InputPassword
            label="Digite sua nova senha*:"
            value={newPassword}
            setValue={setNewPassword}
            hasError={errors.newPassword?.hasError}
            messageError={errors.newPassword?.message}
          />
          <InputPassword
            label="Confirme sua nova senha*:"
            value={confirmNewPassword}
            setValue={setConfirmNewPassword}
            hasError={errors.confirmNewPassword?.hasError}
            messageError={errors.confirmNewPassword?.message}
          />
          <ButtonPrimary type="submit">Confirmar</ButtonPrimary>
        </form>
      </Container>
    </DefaultLayout>
  )
}
