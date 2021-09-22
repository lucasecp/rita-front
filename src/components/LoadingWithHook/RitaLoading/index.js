import React from 'react'
import { Container } from './style'
import logoGif from '@/assets/logo/logo-animate.gif'
import { useLoading } from '@/context/useLoading'

const LoadingWithHook = () => {
  const {loading} = useLoading()
  return (
 loading &&
   <Container>
        <img src={logoGif} alt='Carregando...'/>
    </Container>
  )
}

export default LoadingWithHook
