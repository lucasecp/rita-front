import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to="/definir-senha">Definir senha</Link>
        <Link to="/cadastro-cartao-sabin">Cartão Sabin</Link>
        <Link to="/cadastro-cliente-cartao-sabin-saude">
          cadastro cliente cartao sabin saude
        </Link>
        <Link to="/teste">Teste de Componentes</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
