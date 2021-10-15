import React, { useEffect } from 'react'

import Menu from './Menu'
import { useMenu } from '@/context/Menu'
import { Container } from './style'

const Sidenav = () => {
  const { setShowMenu, showMenu } = useMenu()

  useEffect(() => {
    if(showMenu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [showMenu]);

  return (
    <Container
      show={showMenu}
      onClick={(e) =>
        e.target === e.currentTarget ? setShowMenu(false) : null
      }
    >
      <nav>
        <Menu />
      </nav>
    </Container>
  )
}

export default Sidenav
