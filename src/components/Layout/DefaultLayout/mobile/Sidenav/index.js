import React, { useEffect } from 'react'

import Menu from '../../shared/Menu'

import { useMenu } from '@/hooks/useMenu'
import { Container } from './style'

const Sidenav = () => {
  const { showMenu, closeMenu } = useMenu()

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto'
  }, [showMenu])

  return (
    <Container
      show={showMenu}
      onClick={(e) => e.target === e.currentTarget && closeMenu()}
    >
      <nav>
        <Menu expanded />
      </nav>
    </Container>
  )
}

export default Sidenav
