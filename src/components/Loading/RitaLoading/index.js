import React from 'react'
import { Container } from './style'
import logoGif from '@/assets/logo/logo-animate.gif'
import { useLoading } from '@/hooks/useLoading'

export const RitaLoading = () => {
  const { isLoading } = useLoading()

  return isLoading ? (
    <Container>
      <img src={logoGif} alt="Carregando..." />
    </Container>
  ) : null
}
