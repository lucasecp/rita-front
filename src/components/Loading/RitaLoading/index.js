import React from 'react'
import { Container } from './style'
import logoGif from '@/assets/logo/logo-animate.gif'
import { useLoading } from '@/hooks/useLoading'

const RitaLoading = () => {
  const { loading } = useLoading()
  return (
    loading && (
      <Container>
        <img src={logoGif} alt="Carregando..." />
      </Container>
    )
  )
}

export default RitaLoading
