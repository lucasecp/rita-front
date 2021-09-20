import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import LayoutExpanded from '@/components/Layout/LoginLayout'
import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from './style'
// import ritaLogoImg from '@/assets/logo/vertical-named-logo.svg'

function Login() {
  return (
    <>
      <LayoutExpanded>
        <aside>{/* <img src={ritaLogoImg} /> */}</aside>
        <Content>
          <InputMask className="mb-3" label="CPF*:" />
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
            <span className="">
              Não possui conta?
              <Link> Cadastre-se aqui</Link>
            </span>
          </div>
        </Content>
      </LayoutExpanded>
    </>
  )
}
export default Login
