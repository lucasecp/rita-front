import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import LayoutExpanded from '@/components/Layout/LoginLayout'
import React from 'react'
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
            <span className="mt-3">
              Não possui conta? {/* colocar em um p */}
              <a className="mt-3"> Cadastre-se aqui</a>
            </span>
          </div>
        </Content>
      </LayoutExpanded>
    </>
  )
}
export default Login
