import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to="/definir-senha">Definição de Senha</Link>
        <Link to="/login">Login</Link>
        <Link to="/autorizacoes/analisar-pacientes2">
          Analisar Pacientes Temporário
        </Link>
        <Link to="/pacientes/analisar-pacientes2">
          Operador Visualiza Pacientes Que Já Foram Validados
        </Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
