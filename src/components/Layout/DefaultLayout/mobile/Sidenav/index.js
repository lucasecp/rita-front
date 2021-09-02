import React from 'react'

import Menu from './Menu'
import { useMenu } from '../../../../../context/Menu'
import { Container } from './style'


const Sidenav = () => {
  const {setShowMenu,showMenu} = useMenu()

  return (
    <Container  show={showMenu} onClick={(e) => e.target === e.currentTarget ? setShowMenu(false) : null}>
      <nav>
        <Menu  />
      </nav>
    </Container>
  )
}

export default Sidenav
