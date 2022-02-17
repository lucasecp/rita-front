import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { InputPassword } from '@/components/Form/InputPassword'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { useAuth } from '@/hooks/login'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import hasLetter from '@/helpers/hasLetter'
import hasNumber from '@/helpers/hasNumber'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import {
  FORGOT_PASSWORD_INIT,
  LOGIN,
} from '@/routes/constants/namedRoutes/routes'
import apiUser from '@/services/apiUser'
import { setHeaderToken } from '@/storage/user'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import AlreadyExists from './messages/Error'
import DefinePasswordSuccess from './messages/Success'

import { Content, Button } from './style'

const msgErrorPass =
  'A senha informada não atende aos critérios de segurança, por favor verifique e tente novamente.'

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
    document.title = 'Rita Saúde | Definir Senha'
    if (!state) return history.push(LOGIN)
  }, [])

  const validateErrors = () => {
    const newErrors = {}
    if (!hasSpecialCaracter(password)) newErrors.password = msgErrorPass
    if (!hasLetter(password)) newErrors.password = msgErrorPass
    if (!hasNumber(password)) newErrors.password = msgErrorPass
    if (password.includes(' ')) newErrors.password = msgErrorPass
    if (password.trim().length < 6) newErrors.password = msgErrorPass
    if (password.trim() !== confirmPass.trim())
      newErrors.confirmPass = msgErrorPass
    if (!password.trim()) newErrors.password = 'Campo Obrigatório'
    if (!confirmPass.trim()) newErrors.confirmPass = 'Campo Obrigatório'
    setErrors(newErrors)
    return newErrors
  }

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
        return history.push(FORGOT_PASSWORD_INIT, { error: 'EXPIRED_TOKEN' })
      }
      if (response && response.status === 400) {
        showMessage(AlreadyExists, { message: response.data.message })
      }
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <RegisterLayout>
      <Content onSubmit={handleSubmit}>
        <h6>Preencha os campos abaixo para redefinir sua senha.</h6>
        <p>
          A senha deve conter letras, números e caracteres especiais. <br />
          Mínimo 6 dígitos e sem espaços.
        </p>
        <Row>
          <Col md={6}>
            <InputPassword
              label="Digite sua nova senha*:"
              value={password}
              setValue={setPassword}
              hasError={errors.password}
              messageError={errors.password}
            />
          </Col>
          <Col className="mt-4 mt-md-0" md={6}>
            <InputPassword
              label="Confirme sua nova senha*"
              value={confirmPass}
              setValue={setConfirmPass}
              hasError={errors.confirmPass}
              messageError={errors.confirmPass}
            />
          </Col>
        </Row>
        <Button>
          <OutlineButton type="button" onClick={() => history.push(LOGIN)}>
            Voltar
          </OutlineButton>
          <ButtonPrimary type="submit">Confirmar</ButtonPrimary>
        </Button>
      </Content>
    </RegisterLayout>
  )
}
export default Password
