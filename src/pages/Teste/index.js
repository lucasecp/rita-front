import React from 'react'
import ButtonPrimary from '../../components/Button/Primary'
import InputMask from '../../components/Form/InputMask'
import Footer from '../../components/Layout/DefaultLayout/Footer'
import { Container, Content } from './styles'
import logoRitaVertical from '../../assets/logo/vertical-named-logo.svg'

function Teste() {
  return (
    <Container>
      <aside>
        <img src={logoRitaVertical} />
      </aside>
      <main>
        <Content>
          <div>
            <h6>Para iniciarmos o processo, por favor informe o seu CPF:</h6>
            <div className="input">
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

export default Teste
