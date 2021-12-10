import React from 'react'
import { Container } from './Styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icon/verified.svg'

const ClinicItem = () => {
  return (
    <Container>
      <h3>Clinica Cardiológica + Vida</h3>
      <ul>
        <li>
          Av. Médicos do Brasil, 800 - Saúde - Rio de Janeiro/RJ
          <VerifiedIcon />
          <a href="">Como chegar</a>
        </li>
      </ul>
    </Container>
  )
}

export default ClinicItem
