import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import { InputPassword } from '@/components/Form/InputPassword'
import LoginLayout from '@/components/Layout/LoginLayout'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Content } from './style'
import CheckboxComponent from '@/components/Form/Checkbox'
import validateCpf from '@/helpers/validateCpf'
import { useAuth } from '@/hooks/login'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { useModal } from '@/hooks/useModal'
import HasCardSabin from './messages/HasCardSabin'
import ExpiredSession from './messages/ExpiredSession'
import { FORGOT_PASSWORD_INIT } from '@/routes/constants/namedRoutes/routes'

function Login() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [stayConnected, setStayConnected] = useState(false)
  const [errors, setErrors] = useState({})
  const { login } = useAuth()
  const { showMessage } = useModal()
  const { state } = useLocation()

  useEffect(() => {
    state && state.message && showMessage(ExpiredSession)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateErrors().cpf || validateErrors().password) return
    login(
      {
        cpf: clearSpecialCaracter(cpf),
        senha: password,
        permanecerConectado: stayConnected,
      },
      state
    )
  }

  const validateErrors = () => {
    const newErrors = {}
    if (!cpf.trim()) newErrors.cpf = 'Este campo é obrigatório.'
    else if (!validateCpf(cpf.trim())) newErrors.cpf = 'CPF inválido.'
    if (!password.trim()) newErrors.password = 'Este campo é obrigatório.'
    setErrors(newErrors)
    return newErrors
  }

  return (
    <LoginLayout>
      <Content onSubmit={handleSubmit}>
        <InputMask
          name="cpf"
          label="CPF*:"
          value={cpf}
          setValue={setCpf}
          mask="999.999.999-99"
          hasError={errors.cpf}
          msgError={errors.cpf}
        />

        <InputPassword
          name="password"
          label="Senha*:"
          value={password}
          setValue={setPassword}
          hasError={errors.password}
          messageError={errors.password}
        />
        <CheckboxComponent
          setValue={setStayConnected}
          checked={stayConnected}
          label="Permanecer Conectado"
        />
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        <span>
          <Link to={FORGOT_PASSWORD_INIT}>Esqueci minha senha</Link>{' '}
        </span>
        <div>
          Não possui conta?
          <Link to="#" onClick={() => showMessage(HasCardSabin, {}, true)}>
            Cadastre-se aqui
          </Link>
        </div>
      </Content>
    </LoginLayout>
  )
}
export default Login
