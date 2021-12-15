import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

const Header = () => {
  return ( 
    <Container>
      <div></div>
      <div>
        <h2>Dra. Maria Eduardo Sampaio Correia</h2>
        <h4>Cardiologista</h4>
        <ul>
          <li>
            <h6>
              Conselho Regional: <span>CRM -12345 - RJ </span>
            </h6>
          </li>
          <li>
            <h6>
              Especialidades: <span>Cardiologia - RQE</span> <VerifiedIcon />
            </h6>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
