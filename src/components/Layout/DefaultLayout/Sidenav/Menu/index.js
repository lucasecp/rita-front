import React from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '../../../../../assets/icons/home.svg'
import userIcon from '../../../../../assets/icons/user.svg'
import groupUserIcon from '../../../../../assets/icons/people.svg'

import { Container } from './styles'

function Menu() {
  return (
    <Container>
      <li>
        <span />
        <div>
          <img src={homeIcon} />
          <Link to="#">Inicio</Link>
        </div>
      </li>
      <li>
        <span />
        <div>
          <img src={userIcon} />
          <Link to="#">Perfil</Link>
        </div>
      </li>
      <li>
        <span />
        <div>
          <img src={groupUserIcon} />
          <Link to="#">Dependentes</Link>
        </div>
      </li>
    </Container>
  )
}

export default Menu
