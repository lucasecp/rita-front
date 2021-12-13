import React from 'react'
import { Container } from './Styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icon/verified.svg'

const Header = () => {
  return (
    <Container>
      <div></div>
      <div>
        <h2>Dra. Maria Eduardo Sampaoi Correia</h2>
        <h4>Cardiologia</h4>
        <ul>
          <li>
            <h6>Conselho Regional: </h6>
            <span>Conselho Regional: CRM -12345 - RJ </span>
          </li>
          <li>
            <h6>Especialidade: </h6> <span>Cardiologia - RQE</span>
            <VerifiedIcon />
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
