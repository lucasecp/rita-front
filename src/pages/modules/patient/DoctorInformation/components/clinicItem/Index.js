import OutlineButton from '@/components/Button/Outline'
import React from 'react'
import { Container } from './Styles'

const ClinicItem = () => {
  return (
    <Container>
      <h2>Clinica Cardiológica + Vida</h2>
      <ul>
        <li>Saúde - Rio de janeiro - RJ</li>
      </ul>
      <OutlineButton>Ver detalhes</OutlineButton>
    </Container>
  )
}

export default ClinicItem
