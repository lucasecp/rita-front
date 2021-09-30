import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to="/definir-senha">Definição de Senha</Link>
        <Link to="/login">Login</Link>
        <Link to="/autorizacoes/ver-paciente">
          Acessar Cadastro de um Paciente
        </Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
