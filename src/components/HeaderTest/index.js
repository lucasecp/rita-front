import React from 'react'
import { HeaderLayout } from './style'
import { Link } from 'react-router-dom'
import { DEFINE_PASSWORD, OPERATOR_ANALYZE_PATIENT2, VALIDATOR_ANALYZE_PATIENTS2 } from '@/routes/constants/namedRoutes/routes'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link to={DEFINE_PASSWORD}>Definição de Senha</Link>
        <Link to="/login">Login</Link>
        <Link to={VALIDATOR_ANALYZE_PATIENTS2}>
          Analisar Pacientes Temporário
        </Link>
        <Link to={OPERATOR_ANALYZE_PATIENT2}>
          Operador Visualiza Pacientes Que Já Foram Validados
        </Link>
      </nav>
    </HeaderLayout>
  )
}

export default Header
