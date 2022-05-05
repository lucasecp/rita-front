import React from 'react'
import { ReactComponent as IconLogo } from '@/assets/logo/icon-logo.svg'

import { Container } from './style'

export const Sidenav: React.FC = () => {
  return (
    <Container>
      <div></div>
      <nav>
        <header>
          <IconLogo />
        </header>
      </nav>
    </Container>
  )
}
