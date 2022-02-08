import React from 'react'
import { Container } from './styles'
import { HolderI } from '../types/index'

interface HeaderProps {
  holder: HolderI
}

const Header: React.FC<HeaderProps> = ({ holder }) => {
  return (
    <Container>
      <div>
        <div>
          <h6>Titular:</h6>
          <h5>{holder?.name}</h5>
        </div>
        <div>
          <h6>CPF:</h6>
          <h5>{holder?.cpf}</h5>
        </div>
      </div>
      <span>Plano {holder?.plan}</span>
    </Container>
  )
}

export default Header
