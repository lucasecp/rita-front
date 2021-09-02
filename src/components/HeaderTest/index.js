import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to="/perfil">Master Page</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/definir-senha">Definir senha</Link>
        <Link to="/cadastro-cartao-sabin">Cartão Sabin</Link>
        <Link to="/cadastro-cliente-cartao-sabin-saude">
          cadastro cliente cartao sabin saude
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
