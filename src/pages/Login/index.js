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
function Login() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [stayConnected, setStayConnected] = useState(false)
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
  }
 const validateFields = () =>{
  setErrors({})
  if(!cpf) setErrors({...errors,cpf: 'CPF inválido.'})
  else if(!validateCpf(cpf)) setErrors({...errors,cpf: 'CPF inválido.'})
  if(!password.trim()) setErrors({...errors,password: 'Senha Obrigatória.'})
 }
  return (
    <LoginLayout>
      <Content onSubmit={handleSubmit}>
        <InputMask
          label="CPF*:"
          type=""
          className="mb-4"
          value={cpf}
          setValue={setCpf}
          mask='999.999.999-99'
        />
     { errors.cpf && <MsgError>{errors.cpf}</MsgError>}
        <InputPassword
          label="Senha*:"
          value={password}
          setValue={setPassword}
          />
         { errors.password && <MsgError>{errors.password}</MsgError>}
        <CheckboxComponent
         setValue={setStayConnected}
         checked={stayConnected}
         label='Permanecer Conectado'
        />
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        {/* <div>
            <p className="mt-3">Esqueci minha senha</p>
          </div> */}
        <Link>Esqueci minha senha</Link>
        <div>
          Não possui conta?
          <Link> Cadastre-se aqui</Link>
        </div>
      </Content>
    </LoginLayout>
  )
}
export default Login
