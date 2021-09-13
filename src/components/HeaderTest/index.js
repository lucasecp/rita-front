import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to="/master-page">Master Page</Link>
        <Link to="/cadastro-inicial">Cadastro Normal</Link>
        <Link to="/cadastro-cartao-sabin">Cadastro Cartão Sabin</Link>
        <Link to="/cadastro/paciente">Cadastro Paciente</Link>
        <Link to="/pre-cadastro">Pré Cadastro</Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
