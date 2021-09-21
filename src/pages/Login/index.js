import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import InputPassword from '@/components/Form/InputPassword'
import LoginLayout from '@/components/Layout/LoginLayout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Content } from './style'
import MsgError from '@/components/MsgError'
import CheckboxComponent from '@/components/Form/Checkbox'
import validateCpf from '@/helpers/validateCpf'
import { useAuth } from '@/context/login'
function Login() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [stayConnected, setStayConnected] = useState(false)
  const [errors, setErrors] = useState({})
  const {login} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateErrors().cpf || validateErrors().password ) return

    login({cpf,password})
  }

 const validateErrors = () =>{
  const newErrors = {}
     if(!cpf.trim()) newErrors.cpf = 'Campo Obrigatório.'
     else if(!validateCpf(cpf.trim())) newErrors.cpf = 'CPF inválido.'
     if(!password.trim()) newErrors.password = 'Campo obrigatório.'
      setErrors(newErrors)
      return newErrors
 }
  return (
    <LoginLayout>
      <Content onSubmit={handleSubmit}>
        <InputMask
          name='cpf'
          label="CPF*:"
          value={cpf}
          setValue={setCpf}
          mask='999.999.999-99'
          hasError={errors.cpf}
        />
     { errors.cpf && <MsgError>{errors.cpf}</MsgError>}
        <InputPassword
          name='password'
          label="Senha*:"
          value={password}
          setValue={setPassword}
          hasError={errors.password}
          />
         { errors.password && <MsgError>{errors.password }</MsgError>}
        <CheckboxComponent
         setValue={setStayConnected}
         checked={stayConnected}
         label='Permanecer Conectado'
        />
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        {/* <div>
            <p className="mt-3">Esqueci minha senha</p>
          </div> */}
       <span> <Link >Esqueci minha senha</Link> </span>
        <div>
          Não possui conta?
          <Link> Cadastre-se aqui</Link>
        </div>
      </Content>
    </LoginLayout>
  )
}
export default Login
