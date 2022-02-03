import React from 'react'

import logoGif from '@/assets/logo/logo-animated-without-background.gif'

import { Container } from './styles'

export const Importing: React.FC = () => {
  return (
    <Container>
      <img src={logoGif} />
      <p>Importação em andamento.</p>
      <p>Por favor aguarde!</p>
    </Container>
  )
}
