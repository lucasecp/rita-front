import React from 'react'
import { Container } from './style'
import logoGif from '@/assets/logo/logo-animate.gif'

const Loading = ({active}) => {
  return (
   active &&
   <Container>
        <img src={logoGif} alt='Carregando...'/>
    </Container>
  )
}

export default Loading
