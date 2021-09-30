import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputPassword from '@/components/Form/InputPassword'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import { useAuth } from '@/context/login'
import { useLoading } from '@/context/useLoading'
import { useModal } from '@/context/useModal'
import hasLetter from '@/helpers/hasLetter'
import hasNumber from '@/helpers/hasNumber'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import apiUser from '@/services/apiUser'
import { setHeaderToken } from '@/storage/user'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import AlreadyExists from './messages/Error'
import DefinePasswordSuccess from './messages/Success'

import { Content, Button } from './style'

function Password() {
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [errors, setErrors] = useState({})

  const history = useHistory()
  const { state } = useLocation()
  const { showMessage } = useModal()
  const { logout } = useAuth()
  const { Loading } = useLoading()
  
  let cpf = ''

  useEffect(() => {
    if (!state) return history.push('/login')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.values(validateErrors()).length) return

    cpf = state.cpf
    setHeaderToken(state.jwtToken)

    try {
      Loading.turnOn()

      await apiUser.post('/senha', {
        cpf,
        senhaNova: password,
        confirmacaoSenha: confirmPass,
      })

      showMessage(DefinePasswordSuccess)
    } catch ({ response }) {
      if (response && response.status === 401) {
        logout()
        return history.push('/esqueci-senha/inicio')
      }
      if (response && response.status === 400) {
        showMessage(AlreadyExists, { message: response.data.message })
      }
    } finally {
      Loading.turnOff()
    }
  }

  const validateErrors = () => {
    const newErrors = {}
    if (!hasSpecialCaracter(password))
      newErrors.password = 'A senha deve ter um caracter especial.'
    if (!hasLetter(password)) newErrors.password = 'A senha deve ter uma letra.'
    if (!hasNumber(password)) newErrors.password = 'A senha deve ter um número.'
    if (password.trim().length < 6)
      newErrors.password = 'A senha deve ter no mínimo 6 digitos.'
    if (password.trim() !== confirmPass.trim())
      newErrors.confirmPass = 'As senhas não conferem, favor revisar os campos'
    if (!password.trim()) newErrors.password = 'Campo Obrigatório'
    if (!confirmPass.trim()) newErrors.confirmPass = 'Campo Obrigatório'
    setErrors(newErrors)
    return newErrors
  }

  return (
    <RegisterLayout>
      <Content onSubmit={handleSubmit}>
        <h6>Preencha os campos abaixo para redefinir sua senha.</h6>
        <p>
          A senha deve conter letras, números e caracteres <br />
          especiais. Mínimo 6 dígitos.
        </p>
        <Row>
          <Col md={6}>
            <InputPassword
              label="Digite sua nova senha*:"
              value={password}
              setValue={setPassword}
              hasError={errors.password}
              msgError={errors.password}
            />
          </Col>
          <Col className="mt-4 mt-md-0" md={6}>
            <InputPassword
              label="Confirme sua nova senha*"
              value={confirmPass}
              setValue={setConfirmPass}
              hasError={errors.confirmPass}
              msgError={errors.confirmPass}
            />
          </Col>
        </Row>
        <Button>
          <OutlineButton type="button" onClick={() => history.push('/login')}>
            Voltar
          </OutlineButton>
          <ButtonPrimary type="submit">Confirmar</ButtonPrimary>
        </Button>
      </Content>
    </RegisterLayout>
  )
}
export default Password
