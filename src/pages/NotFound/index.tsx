import React from 'react'
import logo from '@/assets/logo/logo-animated-without-background.gif'
import { Container } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '@/routes/constants/namedRoutes/routes'

export const NotFound: React.FC = () => {
  const history = useHistory()

  const onBackToHome = () => {
    history.push(LOGIN)
  }

  return (
    <Container>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <img src={logo} />
      <ButtonPrimary onClick={onBackToHome}>Voltar ao Início</ButtonPrimary>
    </Container>
  )
}
