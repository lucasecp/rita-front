import React from 'react'
import { Container } from './style'
import logoGif from '@/assets/icons/logo-animate.gif'

const Loading = ({active}) => {
  return (
   active &&
   <Container>
        <img src={logoGif} alt='Carregando...'/>
    </Container>
  )
}

export default Loading
