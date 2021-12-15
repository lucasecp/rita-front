import OutlineButton from '@/components/Button/Outline'
import React from 'react'
import { Container } from './styles'

const ClinicItemDetails = () => {
  return (
    <Container>
      <div>
        <h2>Clinica Cardiológica + Vida</h2>
        <ul>
          <li>Saúde - Rio de janeiro - RJ</li>
        </ul>
      </div>
      <OutlineButton>Ver detalhes</OutlineButton>
    </Container>
  )
}

export default ClinicItemDetails
