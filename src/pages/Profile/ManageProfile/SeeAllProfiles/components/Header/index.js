import React from 'react'
import { Container, Content } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <h5>Nome do Perfil</h5>
      </Content>
      <Content>
        <h5>Quantidade de pessoas</h5>
      </Content>
      <Content>
        <div>Ações</div>
      </Content>
    </Container>
  )
}

export default Header
