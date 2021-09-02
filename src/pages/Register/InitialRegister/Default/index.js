import React, { useEffect } from 'react'
import logoRitaVertical from '../../assets/logo/vertical-named-logo.svg'
import ButtonPrimary from '../../../../components/Button/Primary'
import InputMask from '../../../../components/Form/InputMask'
import Footer from '../../../../components/Layout/DefaultLayout/Footer'

import { Container, Content } from './styles'

function Register() {
  useEffect(() => {
    document.title = 'Rita Saúde - Cadastro'
  }, [])

  return (
    <Container>
      <aside collapseOnSelect expand="lg">
        <div />
        <img src={logoRitaVertical} />
      </aside>
      <main>
        <Content>
          <div>
            <h6>Para iniciarmos o processo, por favor informe o seu CPF:</h6>
            <div>
              <InputMask mask="###.###.###-##" placeHolder="123.456.789-10" />
              <ButtonPrimary>Confirmar</ButtonPrimary>
            </div>
          </div>
          <Footer />
        </Content>
      </main>
    </Container>
  )
}

export default Register
