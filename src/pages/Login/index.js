import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import LayoutExpanded from '@/components/Layout/LoginLayout'
import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from './style'
import ritaLogoImg from '@/assets/logo/expanded-logo.svg'

function Login() {
  return (
    <>
      <LayoutExpanded>
        <aside>{/* <img src={ritaLogoImg} /> */}</aside>
        <Content>
          <InputMask className="mb-3" label="CPF*:" type="" />
          <InputMask
            className="mb-3"
            label="Senha*:"
            type="password"
          ></InputMask>
          <ButtonPrimary>Entrar</ButtonPrimary>
          <div>
            <p className="mt-3">Esqueci minha senha</p>
          </div>
          <div>
            <span> Não possui conta?</span>
            <Link> Cadastre-se aqui</Link>
          </div>
        </Content>
      </LayoutExpanded>
    </>
  )
}
export default Login
