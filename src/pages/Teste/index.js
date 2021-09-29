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
          <h1>TESTE ROTA PRIVADA</h1>
          </div>
          <Footer />
        </Content>
      </main>
    </Container>
  )
}

export default Teste
